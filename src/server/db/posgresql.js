const Pool = require('pg').Pool
const config = {
  user: 'blog',
  host: '127.0.0.1',
  database: 'blog',
  password: 's00p3r.s3cr37',
  port: 3301,
};

class PostgreSQL {
    constructor (config) {
        this.pool = new Pool(config);
    }
    /*
        /* comarison rules
         * compare table rows to table rows
         * eq   ne  lt  gt
         * comparing table rows to values
         * =    !=  <   >
        {
            select: [table.row]
            where: [
                    [table.id,'===', value],
                    [table.id,'===', value]],
            where: [['OR'
                    [table.id,'===', value],
                    [table.id,'===', value]]],
            where: [
                    ['not', [table.id,'===', value]],
                    [table.id,'===', value]],
            where: [['or'
                    ['not', [table.id,'===', value]],
                    [table.id,'===', value]
                ]],
            start:
            limit:
        }
    */
   matchAndOr(where, checkOperand = false) {
    const matchAndOr = [
        'AND',
        'OR',
    ]
       if ( typeof where[0] == 'string' && this.match(where[0].toUpperCase(), matchAndOr) ) { // Check for AND/OR clause
            if ( checkOperand ) {
                return true;
            }
            const operand = where[0];
             where.shift();
             const whereObject = this.objToWhere(where,false);
             if ( Array.isArray(whereObject) ) {
                 const nestedObject = whereObject.join(` ${operand} `);
                 return `(${nestedObject})`;
            } else {
                return `${whereObject}`;
            }
       }
       return false;
   }
   objToWhere (where, checkOperand = true) {
       if ( checkOperand && !this.matchAndOr(where[0], true) ) {
            where.unshift('AND');
            return this.objToWhere(where, false);
        }
        let result;
       if ( result = this.matchAndOr(where, false)) {
           return result;
       }
       if ( result = this.compareTwo(where, false)) {
           return result;
       }
       if ( Array.isArray(where) ) {
            result = where.map((operation) => {
                return this.objToWhere(operation, false);
            });
            return result;
        }
       return false;
   }
   extractWhereTables(where) {
       //   strip operands
        if ( this.matchAndOr(where, true) || (Array.isArray(where) && where[0] === 'NOT') ) {
            where.shift();
        }
        // check if it is a comparision operation
        if ( this.checkOperand(where) ) {
            if ( this.matchColumnOperation(where, true) ) {
                return this.extractWhereTables([where[0], where[2]]);
            } else {
                return where[0];
            }
        }
        // check for nesting
        if ( Array.isArray(where) ) {
             const result = where.map((operation) => {
                 if ( Array.isArray(operation) ) {
                     return this.extractWhereTables(operation);
                 }
                 return operation;
             });
             return result;
         }
       return result;
   }
   matchValueOperation(where, checkOperand = false) {
        // check for table compare to row statement eg. table.column = '1234'
        const matchValueOperator = ['=','!=','>','<'];
        if ( typeof where[1] == 'string' && this.match(where[1], matchValueOperator) ) {
            if (checkOperand) {
                return true;
            }
          return `${where[0]} ${where[1]} '${where[2]}'`;
        }
        return false;
    }
    matchColumnOperation(where, checkOperand = false) {
       // check for table compare to table statement eg. table1.column = table2.column
       const matchColumnOperator = {
        'eq': '=',
        'ne': '!=',
        'gt': '>',
        'lt': '<',
       }
       if ( typeof where[1] == 'string' && matchColumnOperator[where[1].toLowerCase()] ) {
           if (checkOperand) {
               return true;
           }
        return `${where[0]} ${matchColumnOperator[where[1]]} ${where[2]}`;
       }
       return false;
    }
    checkOperand(where) {
        return this.matchColumnOperation(where, true) || this.matchValueOperation(where, true);
    }
    allStrings (array) {
        for ( let i = 0; i < array.length; i++ ) {
            if (typeof array[i] !== 'string') {
                return false;
            }
        }
        return true;
    }
   compareTwo(where, extract = false) {
        if ( !Array.isArray(where) || (where.length !== 3 && where.length !== 4) || !this.allStrings(where) ) {
             return false;
        }
        let not = '';
        if ( where.length === 4 && where[0].toUpperCase() === 'NOT') {
            not = 'NOT ';
            where.shift();
        }
        if ( extract ) {
            return [where[0],where[2]];
        }
        let operation;
        operation = not.concat(this.matchValueOperation(where) || this.matchColumnOperation(where) || false);
        if ( operation !== not ) {
            return operation;
        }
        return false;
   }
    extractTableName(tables, column) {
        const tableName = column.slice(0,column.indexOf("."));
        if ( !this.match(tableName, tables) ) {
            return tables.concat([tableName]);
        }
        return tables;
    }
    extractTableNames(list) {
        let tables = [];
        list.forEach ( (column) => {
            tables = this.extractTableName(tables, column);
        });
        return tables;
   }
   match (needle, haystack) {
       const index = haystack.indexOf(needle);
       if ( haystack[index] === needle ) {
           return true;
       }
       return false;
   }
   condenseWhereTables(tables) {
       let result = [];
       if ( Array.isArray(tables) ) {
            tables.forEach( (table) => {
                if ( Array.isArray ) {
                    result = result.concat(this.condenseWhereTables(table));
                }
                result = result.concat(table);
            })
       }
       return result;
   }
   parseGet(JSONQuery) {
       const { start, limit } = JSONQuery;
       const tablesFromSelect = this.extractTableNames(JSONQuery.select);
       const whereTables = this.condenseWhereTables(this.extractWhereTables(JSONQuery.where))
       const tablesFromWhere = this.extractTableNames(whereTables);
       let tables = [];
       tablesFromSelect.concat(tablesFromWhere).forEach( (tableName) => {
           if ( !this.match(tableName, tables) ) {
               tables = tables.concat(tableName);
           }
       });
       tables = tables.join(', ');
       const select = JSONQuery.select.join(', ');
       const where = this.objToWhere(JSONQuery.where);
       return `SELECT ${select} FROM ${tables} WHERE ${where}`;
   }
    get (JSONQuery) {
        const { table } = JSONQuery;
		const sql = `SELECT ${table}\n(${sqlColumns})\nVALUES\n(${sqlValues}) `;
        console.log(sql)
        this.parseGet({
            select: ['table1.row1','table2.row2','table2.row1','table3.row1']
        })
        //pool.query(sql)
    }
        
    post (JSONQuery) {
        const { table } = JSONQuery;
		const sql = `UPDATE ${table}\n(${sqlColumns})\nVALUES\n(${sqlValues}) `;
		console.log(sql)
        pool.query(sql)


		const sqlColumns = insert.map( (column, i) => {
			return `"${column}", `
		}).join(' ').slice(0,-2);
		const sqlValues = insert.map( (column, i) => {
			const dataType = route.table.columns[column].type;
			const value = body[column];
			const validateData = route.table.columns[column].validate
				? dataValidation(route.table.columns[column].validate, value)
				: dataValidation(dataType, value);
			return validateData();
		}).join(', ');
    }
        
    put (JSONQuery) {
        const { table } = JSONQuery;
		const sql = `INSERT INTO ${table}\n(${sqlColumns})\nVALUES\n(${sqlValues}) `;
		console.log(sql)
        pool.query(sql)
    }
    delete (JSONQuery) {
        const { table } = JSONQuery;
		const sql = `DELETE FROM ${table}\n(${sqlColumns})\nVALUES\n(${sqlValues}) `;
		console.log(sql)
        pool.query(sql)
    }
}
module.exports =  PostgreSQL;
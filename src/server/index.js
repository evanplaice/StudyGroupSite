
const express = require("express");
const app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const Pool = require('pg').Pool
const config = {
  user: 'StudyGroupSite',
  host: '127.0.0.1',
  database: 'blog',
  password: 's00p3r.s3cr37',
  port: 3301,
};
const pool = new Pool(config);
module.exports =  pool;


const db = new (require("./db/posgresql"))(config);
console.log(db.parseGet({
    select: ['table1.row1','table2.row2','table2.row1','table3.row1'],
    where: ['AND',
        ['NOT','table1.id','=', 'value'],
        ['table2.id','=', 'value'],
        ['OR',
            ['table3.id','=', 'value'],
            ['table4.id','=', 'value'],
        ]
    ]
}));

const dataValidation = require("./dataValidation");
app.get('/projects', (req, res) => {
    const { body, params, query } = req;
    let GithubProject = [];
    if ( query ) {
        const { start, limit, orderBy } = query;
        /* 
        orderBy: {
            name: 0,
            created: 1,
            updated: 2,
        }
        */
        GithubProjects = [{
            id: 0,
            name: "Test",
            uri: null,
            description: null, 
            added: null,
            updated: null,
        }];

    }
    res.send({GithubProjects});
});
app.get('/project/:id', (req, res) => {
    const { query } = req;
    let GithubProject = {};
    if ( query ) {
        GithubProject = {
            id: 0,
            name: "Test",
            uri: null,
            description: null, 
            added: null,
            updated: null,
        };
    }
    res.send({GithubProject});
});
app.post('/project/:id', (req, res) => {

});
app.put('/project/:id', (req, res) => {

});
app.delete('/project/:id', (req, res) => {

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

import Logo from "../../assets/bclogo.png";

export default class Nav extends Component {
  render() {
    return (
      <Container>
        <Item>
          <Links to="/">Home</Links>
        </Item>
        <Item>
          <Links to="/About">About</Links>
        </Item>
        <Item>
          <Image src={Logo} />
        </Item>
        <Item>
          <Links to="/Projects">Projects</Links>
        </Item>
        <Item>
          <Links to="/GroupLearning">Group Learning</Links>
        </Item>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  border: 1px solid #000;
  align-items: center;
  justify-content: space-around;
  padding-left: 50px;
`;
const Item = styled.div`
  display: flex;
`;
const Image = styled.img`
  height: 65px;
  width: 65px;
`;
const Links = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
`;

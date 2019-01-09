import React, { Component } from "react";
import styled from "@emotion/styled";

import Nav from "../NavBar/Nav";

export default class HeaderHome extends Component {
  render() {
    return (
      <Container>
        <Nav />
        <Title>Junior Projects Night</Title>
      </Container>
    );
  }
}

// CSS-in-JS styled components
const Title = styled.h2`
  color: #000;
  display: flex;
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

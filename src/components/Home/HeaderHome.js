import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

export default class HeaderHome extends Component {
  render() {
    return (
      <Container>
        <nav>
          <Link to="/">Home</Link>{" "}
        </nav>
        <Title>Junior Projects Night</Title>
      </Container>
    );
  }
}

// CSS-in-JS styled components
const Title = styled.h2`
  color: #000;
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

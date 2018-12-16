import React, { Component } from "react";
import styled from "@emotion/styled";

export default class AboutHome extends Component {
  render() {
    return (
      <Container>
        <Title>About</Title>
      </Container>
    );
  }
}

// CSS-in-JS styled components
const Title = styled.h2`
  color: #fff;
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

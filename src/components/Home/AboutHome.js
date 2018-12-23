import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

export default class AboutHome extends Component {
  render() {
    return (
      <Container>
        <Title>Who are we?</Title>
        <Par>
          We are a group of junior developers who get together to help each
          other learn, work on open-source projects, and hangout. Want to learn
          more about what we are about, what we do, or how to get involved?
        </Par>
        <Link to="/About">Learn More</Link>
      </Container>
    );
  }
}

// CSS-in-JS styled components
const Title = styled.h1`
  color: #fff;
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Par = styled.p`
  font-size: 20px;
  color: #fff;
  padding-left: 10%;
  padding-right: 10%;
`;

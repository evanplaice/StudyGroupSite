import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

export default class ProjectsHome extends Component {

  state = {
    projectDocLink: "https://google.com"
  }

  onButtonClick = () => {
    window.open(this.projectDocLink);
  }
  
  render() {
    return (
      <Container>
        <Title>
          <button className = "ui basic button" onClick={this.onButtonClick}>
            Click here to open projects doc
          </button>
        </Title>
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

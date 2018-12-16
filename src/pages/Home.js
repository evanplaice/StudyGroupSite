import React, { Component } from "react";
import styled from "@emotion/styled";

// components
import HeaderHome from "../components/Home/HeaderHome";
import AboutHome from "../components/Home/AboutHome";
import ProjectsHome from "../components/Home/ProjectsHome";
import GLHome from "../components/Home/GLHome"; //Group Learning

export default class Home extends Component {
  render() {
    return (
      <Container>
        <HeaderHome />
        <AboutHome />
        <ProjectsHome />
        <GLHome />
      </Container>
    );
  }
}

// CSS-in-JS styled components
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

import React, { Component } from "react";
// importing the router and link
import { Router } from "@reach/router";
// importing the page containers
import Home from "./pages/Home";
import About from "./pages/About";

export default class Navigator extends Component {
  render() {
    return (
      <div>
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </div>
    );
  }
}

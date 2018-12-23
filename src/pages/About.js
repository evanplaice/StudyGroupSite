import React, { Component } from "react";
import styled from "@emotion/styled";

import Nav from "../components/NavBar/Nav";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Nav />
        <Title>What We Do</Title>
        <Card>
          <Par>
            We are dedicated to learning and development and teamwork skills by
            building things together. Every week we meet up at Coffee at the
            Point to work on projects together, hang out, and chat about
            development
          </Par>
        </Card>
        <Title>Who We Are</Title>
        <Card>
          <Par>
            Anyone who wants to learn and improve through building awesome
            things is welcome. Whether you are a complete beginner or
            experienced dev you are welcome to come and participate. If you are
            in a bootcamp and want some people to bounce ideas off of while you
            do your homework or are teaching yourself to code this is a great
            place to meet like minded people and grow.
          </Par>
        </Card>
        <Title>How To Get Involved</Title>
        <Par>
          We meet every Tuesday at 6pm at Coffee at the Point in Denver. Check
          out our projects page to see some of our current projects. Each
          project has specific guidelines on how to contribute.
        </Par>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1``;
const Par = styled.p`
  max-width: 600px;
`;
const Card = styled.div``;

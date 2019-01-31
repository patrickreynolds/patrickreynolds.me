import React, { Component } from "react";
import styled from 'styled-components'

const FactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 0;
  margin-top: ${props => props.first ? "0" : "40px"};
`

const Question = styled.h4`
  display: flex;
  margin: 0;
  text-transform: uppercase;
`

const Answer = styled.p`
  display: flex;
  color: var(--black-60);
  margin: 0;
  margin-top: 8px;
`

class Fact extends Component {
  render() {
    return (
      <FactContainer first={this.props.first || false}>
        <Question>{this.props.question}</Question>
        <Answer>{this.props.answer}</Answer>
      </FactContainer>
    );
  }
}

export default Fact;
import React, { Component } from "react";
import styled from 'styled-components'

const FactContainer = styled.div`
  float: left;
  min-height: 120px;
`

const Question = styled.h4`
  margin: 0;
  text-transform: uppercase;
`

const Answer = styled.p`
  color: var(--black-60);
  margin: 0;
  margin-top: 8px;
`

class Fact extends Component {
  render() {
    return (
      <div className="col-4 col-6-sm">
        <FactContainer first={this.props.first || false}>
          <Question>{this.props.question}</Question>
          <Answer>{this.props.answer}</Answer>
        </FactContainer>
      </div>
    );
  }
}

export default Fact;
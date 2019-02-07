import React, { Component } from "react";
import styled from 'styled-components'

const PortfolioContainer = styled.div`
  margin: 0 0 80px 0;
  cursor: pointer;
`

const PortfolioHero = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  corner-radius: 4px;
  -webkit-box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.08);
  -moz-box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.08);
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.08);
`

const Title = styled.h3`
  margin: 24px 0 0 0;
  text-transform: uppercase;
`

const Description = styled.p`
  margin: 8px 0 0 0;
  color: var(--black-60);
`

class PortfolioPiece extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-6 col-12-sm">
        <PortfolioContainer first={this.props.first || false}>
          <PortfolioHero></PortfolioHero>
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
        </PortfolioContainer>
      </div>
    );
  }
}

export default PortfolioPiece;
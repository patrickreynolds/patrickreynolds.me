import React, { Component } from "react";
import styled from 'styled-components'

const HobbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  margin-left: ${props => props.first ? "0" : "24px"};
  text-align: center;
  cursor: pointer;
`

const HobbyTitle = styled.h4`
  margin: 0px;
  margin-top: 16px;
  line-height: 1;
  text-transform: uppercase;
`

const HobbyHero = styled.div`
  display: flex;
  height: 120px;
  background-color: #EEE;
  backgroundImage: ${props => props.url};
`

const HobbyHeroStyle = {
  display: 'flex',
}

const HobbyTitleStyle = {
  display: 'flex',
  color: 'var(--black-90)',
}

class Hobby extends Component {
  constructor(props) {
    super(props)

    this.title = this.title.bind(this)
    this.url = this.url.bind(this)
  }

  title(type) {
    const Data = {
      "books": {
        title: "Books",
        url: "https://localhost.com",
      },
      "photos": {
        title: "Photos",
        url: "https://localhost.com",
      },
      "writing": {
        title: "Writing",
        url: "https://localhost.com",
      }
    }

    return Data[type].title || ""
  }

  url(type) {
    const Data = {
      "books": {
        title: "Books",
        url: "https://localhost.com",
      },
      "photos": {
        title: "Photos",
        url: "https://localhost.com",
      },
      "writing": {
        title: "Writing",
        url: "https://localhost.com",
      }
    }

    return Data[type].url || ""
  } 

  render() {
    return (
      <HobbyContainer first={this.props.first || false}>
        <HobbyHero url={this.url(this.props.type)}></HobbyHero>
        <HobbyTitle>{ this.title(this.props.type) }</HobbyTitle>
      </HobbyContainer>
    );
  }
}

export default Hobby;

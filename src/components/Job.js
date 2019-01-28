import React, { Component } from "react";
import styled from 'styled-components'

const Company = styled.h3`
  margin: 0px;
  padding-right: 16px;
  line-height: 1;
`

const Accent = styled.h6`
  color: var(--accent);
`

const Role = styled.h4`
  margin: 16px 0 0 0;
  text-transform: capitalize;
`

const Location = styled.p`
  margin: 0;
  padding-right: 16px;
`

const Timeframe = styled.p`
  margin: 0;
`

const JobStyle = {
  paddingRight: '80px',
}

const JobHeaderStyle = {
  display: 'flex',
}

const JobDetailsStyle = {
  display: 'flex',
  margin: '8px 0 0 0',
  color: 'var(--black-60)',
}

class Job extends Component {
  render() {
    return (
      <div style={JobStyle}>
        <div style={JobHeaderStyle}>
          <Company>{this.props.company}</Company>
          <Accent>{this.props.accent}</Accent>
        </div>
        <Role>{this.props.role}</Role>
        <div style={JobDetailsStyle}>
          <Location>{this.props.location}</Location>
          <Timeframe>{this.props.timeframe}</Timeframe>
        </div>
      </div>
    );
  }
}

export default Job;
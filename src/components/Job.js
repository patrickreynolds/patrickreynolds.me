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
  margin: 8px 0 0 0;
  text-transform: capitalize;
`

const Location = styled.p`
  margin: 0;
  padding-right: 16px;
  color: var(--black-60);
`

const Timeframe = styled.p`
  margin: 0;
  color: var(--black-60);
`

const Description = styled.p`
  margin: 0;

  @media only screen and (max-device-width: 45em) { /* 960px */
    margin-top: 32px;
  }
`

const JobHeaderStyle = {
  display: 'flex',
}

const JobDetailsStyle = {
  display: 'flex',
  margin: '8px 0 0 0',
  color: 'var(--black-60)',
}


const JobContainer = styled.div`
  margin-left: 0;
  float: left;
  margin-top: 56px;
`

const Left = {
  marginLeft: 0,
  float: 'left',
}

class Job extends Component {
  render() {
    return (
      <div className="col-12">
        <JobContainer>
          <div className="col-5 col-12-sm" style={Left}>
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
          <div className="col-7 col-12-sm" style={Left}>
            <Description className="black-70">{this.props.description}</Description>
          </div>
        </JobContainer>
      </div>
    );
  }
}

export default Job;
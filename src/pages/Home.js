import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";

import HR from "../components/HR"
import Button from "../components/Button"
import Job from "../components/Job"

import IntroPhoto from "../images/intro-photo.png";
 
class Home extends Component {
  render() {
    return (
      <div>
        <div className="section-hero">
          <div className="section-hero-content">
            <div className="intro-info">
              <h6 className="accent">Hello! My name is</h6>
              <h1 className="intro-name">Patrick <br />Reynolds</h1>
              <p className="black-90">
                I’m an engineer turned designer in San Francisco, CA. I currently work at Affirm where I’m focused on creating honest financial products that improve lives.
                <br /><br />
                This little website is my corner of the interwebs where I wanted to share some of my past <NavLink to="/work" style={{ textDecoration: 'none' }}><span className="accent">work</span></NavLink>, 
                publish more thoughts publically on my <NavLink to="/blog" style={{ textDecoration: 'none' }}><span className="accent">blog</span></NavLink>, 
                and give people an opprotunity to learn a little more <NavLink to="/about-me" style={{ textDecoration: 'none' }}><span className="accent">about me</span></NavLink>.
                </p>
            </div>
            <div className="intro-photo">
              <img ref="" src={IntroPhoto} />
            </div>
          </div>
          <HR></HR>
        </div>
        <div className="section-me">
          <div className="section-me-header">
            <h2>Me</h2>
            <Button primary style={{marginLeft: 'auto'}}>More about me</Button>
          </div>

          <HR></HR>
        </div>
        <div className="section-portfolio">
          <div className="section-portfolio-header">
            <h2>Portfolio</h2>
            <Button primary style={{marginLeft: 'auto'}}>View portfolio</Button>
          </div>

          <HR></HR>
        </div>
        <div className="section-career">
          <div className="section-career-header">
            <h2>Career</h2>
          </div>
          <div className="section-career-content">
            <Job
              company={"Affirm"}
              accent={"Current"}
              role={"product designer"}
              location={"San Francisco, CA"}
              timeframe={"2016 - ?"}>
            </Job>
            <Job
              company={"Sweep"}
              accent={"Acquired by affirm"}
              role={"Software engineer"}
              location={"San Francisco, CA"}
              timeframe={"2015 - 2016"}>
            </Job>
            <Job
              company={"Adobe"}
              accent={""}
              role={"Experience Developer"}
              location={"San Francisco, CA"}
              timeframe={"2014 - 2015"}>
            </Job>
          </div>
          <HR></HR>
        </div>
      </div>
    );
  }
}

export default Home;
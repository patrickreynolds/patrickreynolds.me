import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";

import HR from "../components/HR"
import Button from "../components/Button"
import Job from "../components/Job"
import Hobby from "../components/Hobby"
import FactsColumn from "../components/HobbyColumn"
import Fact from "../components/Fact"

import IntroPhoto from "../images/intro-photo.png";
 
class Home extends Component {
  render() {
    return (
      <div>
        <div className="section-hero row">
          <div className="section-hero-content">
            <div className="col-6 col-12-sm">
              <div className="intro-info">
                <h6 className="accent">Hello! My name is</h6>
                <h1 className="intro-name">Patrick Reynolds</h1>
                <p className="intro black-90">
                  I’m an engineer turned designer in San Francisco, CA. I currently work at Affirm where I’m focused on creating honest financial products that improve lives.
                  <br /><br />
                  This little website is my corner of the interwebs where I wanted to share some of my past <NavLink to="/work" style={{ textDecoration: 'none' }}><span className="accent">work</span></NavLink>, 
                  publish thoughts on my <NavLink to="/blog" style={{ textDecoration: 'none' }}><span className="accent">blog</span></NavLink>, 
                  and share a little more <NavLink to="/about-me" style={{ textDecoration: 'none' }}><span className="accent">about me</span></NavLink>.
                  </p>
              </div>
            </div>
            <div className="col-6 intro-photo-content hidden-sm">
              <div className="intro-photo col-10">
                <img ref="" src={IntroPhoto} />
              </div>
            </div>
          </div>
          <HR></HR>
        </div>
        {/*
        <div className="section-me">
          <div className="section-me-header">
            <h2>Me</h2>
            <Button primary style={{marginLeft: 'auto'}}>More about me</Button>
          </div>
          <div className="section-me-content">
            <Hobby first type={"books"}></Hobby>
            <Hobby type={"photos"}></Hobby>
            <Hobby type={"writing"}></Hobby>
          </div>

          <h3 className="stats-n-facts-header">Stats 'n facts</h3>

          <div className="stats-n-facts-content">
            <FactsColumn first>
              <Fact
                first
                question={"Born"}
                answer={"Palm Springs, CA"}>
              </Fact>
              <Fact
                question={"Myers Brigs"}
                answer={"ENFJ"}>
              </Fact>
              <Fact
                question={"Interests"}
                answer={"Cooking, photography, reading, writing, basically any sport, ramen, and things with engines."}>
              </Fact>
              <Fact
                question={"Idols & Mentors"}
                answer={"Jack Dorsey, Tim Ferris, Simon Sinek, James Clear"}>
              </Fact>
            </FactsColumn>
            <FactsColumn>
              <Fact
                first
                question={"Favorite Book"}
                answer={"The Four Agreements"}>
              </Fact>
              <Fact
                question={"Favorite Movie"}
                answer={"Good Will Hunting"}>
              </Fact>
              <Fact
                question={"Favorite Country Visited"}
                answer={"Japan"}>
              </Fact>
              <Fact
                question={"Favorite Food"}
                answer={"Raspberries"}>
              </Fact>
            </FactsColumn>
            <FactsColumn>
              <Fact
                first
                question={"Fun Fact"}
                answer={"I've run with the bulls in Pamplona."}>
              </Fact>
              <Fact
                question={"Countries Visited"}
                answer={"19"}>
              </Fact>
              <Fact
                question={"Dogs or Cats"}
                answer={"Def dogs."}>
              </Fact>
              <Fact
                question={"Pet Peeve"}
                answer={"k."}>
              </Fact>
            </FactsColumn>
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
        */}
      </div>
    );
  }
}

export default Home;

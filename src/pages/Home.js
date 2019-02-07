import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";

import ReactGA from 'react-ga'

import HR from "../components/HR"
import Button from "../components/Button"
import Job from "../components/Job"
import Hobby from "../components/Hobby"
import FactsColumn from "../components/HobbyColumn"
import Fact from "../components/Fact"
import PortfolioPiece from "../components/PortfolioPiece"

import IntroPhoto from "../images/intro-photo.png";
 
class Home extends Component {
  componentDidMount() {
    ReactGA.set({ page: '/'})
    ReactGA.pageview('/')
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="section-hero">
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
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="section-portfolio">

              <div className="col-12">
                <div className="section-portfolio-header">
                  <h2>Portfolio</h2>
                  <Button primary large className="button-large">View portfolio</Button>
                </div>
              </div>
              
              <div className="portfolio-content">
                <PortfolioPiece
                  title={"Affirm Offers"}
                  description={"I was the sole designer on Affirm's recent direct to consumer product called Affirm Offers, which allows users to browse merchants for low-interest deals prior to purchase."}>
                </PortfolioPiece>
                <PortfolioPiece
                  title={"Web Prequalification & Offers"}
                  description={"I was also the sole designer on Affirm’s effort to bring our native mobile experience to our user portal, where users have historically used only for loan repayment and servicing."}>
                </PortfolioPiece>
                <PortfolioPiece
                  title={"Pop & Bottle Redesign"}
                  description={"Include a blurb about the Pop & Bottle redesign process."}>
                </PortfolioPiece>
                <PortfolioPiece
                  title={"Affirm Mobile Engineering"}
                  description={"Include a blurb about time spent as a mobile engineer."}>
                </PortfolioPiece>
              </div>

              <Button primary small className="button-small">View portfolio</Button>

              <HR></HR>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="section-me">
              <div className="col-12">
                <div className="section-me-header">
                  <h2>Me</h2>
                  <Button primary large className="button-large">More about me</Button>
                </div>
              </div>
              <div className="section-me-content">
                <Hobby first type={"books"}></Hobby>
                <Hobby type={"photos"}></Hobby>
                <Hobby type={"writing"}></Hobby>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="stats-n-facts">
              <div className="col-12">
                <h3 className="stats-n-facts-header">Stats 'n facts</h3>
              </div>
              <div className="stats-n-facts-content">
                <Fact
                  first
                  question={"Born"}
                  answer={"Palm Springs, CA"}
                  className="">
                </Fact>
                <Fact
                  question={"Myers Brigs"}
                  answer={"ENFJ"}
                  className="">
                </Fact>
                <Fact
                  question={"Interests"}
                  answer={"Cooking, sportsball, and ramen."}
                  className="">
                </Fact>
                <Fact
                  question={"Idols & Mentors"}
                  answer={"Jack Dorsey, Tim Ferris, Simon Sinek, James Clear"}
                  className="">
                </Fact>
                <Fact
                  first
                  question={"Favorite Book"}
                  answer={"The Four Agreements"}
                  className="">
                </Fact>
                <Fact
                  question={"Favorite Movie"}
                  answer={"Good Will Hunting"}
                  className="">
                </Fact>
                <Fact
                  question={"Favorite Country Visited"}
                  answer={"Japan"}
                  className="">
                </Fact>
                <Fact
                  question={"Favorite Food"}
                  answer={"Raspberries"}
                  className="">
                </Fact>
                <Fact
                  first
                  question={"Fun Fact"}
                  answer={"I've run with the bulls in Pamplona."}
                  className="">
                </Fact>
                <Fact
                  question={"Countries Visited"}
                  answer={"19"}
                  className="">
                </Fact>
                <Fact
                  question={"Dogs or Cats"}
                  answer={"Def dogs."}
                  className="">
                </Fact>
                <Fact
                  question={"Pet Peeve"}
                  answer={"k."}
                  className="">
                </Fact>
              </div>

              <Button primary small className="button-small">More about me</Button>
            </div>

            <HR></HR>

          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="section-career">
              <div className="col-12">
                <div className="section-career-header">
                  <h2>Career</h2>
                </div>
              </div>
              <div className="section-career-content">
                <Job
                  company={"Affirm"}
                  accent={"Current"}
                  role={"product designer"}
                  location={"San Francisco, CA"}
                  timeframe={"2016 - ?"}
                  description={"Include a blurb about what types of projects I worked on at Affirm over the course of the time I was there. Include a blurb about what types of projects I worked on at Affirm over the course of the time I was there."}>
                </Job>
                <Job
                  company={"Sweep"}
                  accent={"Acquired by affirm"}
                  role={"Software engineer"}
                  location={"San Francisco, CA"}
                  timeframe={"2015 - 2016"}
                  description={"Include a blurb about what types of projects I worked on at Sweep over the course of the time I was there."}>
                </Job>
                <Job
                  company={"Adobe"}
                  accent={""}
                  role={"Experience Developer"}
                  location={"San Francisco, CA"}
                  timeframe={"2014 - 2015"}
                  description={"Include a blurb about what types of projects I worked on at Sweep over the course of the time I was there. Include a blurb about what types of projects I worked on at Sweep over the course of the time I was there."}>
                </Job>
              </div>
              <HR></HR>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

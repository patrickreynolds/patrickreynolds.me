import React, { Component } from "react";
import ReactGA from "react-ga"
 
class About extends Component {
  componentDidMount() {
    ReactGA.set({ page: '/about'})
    ReactGA.pageview('/about')
    console.log("Viewed About")
  }

  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}
 
export default About;
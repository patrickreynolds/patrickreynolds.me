import React, { Component } from "react";
import ReactGA from 'react-ga'
 
class Work extends Component {
  componentDidMount() {
    ReactGA.set({ page: '/work'})
    ReactGA.pageview('/work')
  }

  render() {
    return (
      <div>
        <h2>Work</h2>
      </div>
    );
  }
}
 
export default Work;
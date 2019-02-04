import React, { Component } from "react";
import ReactGA from "react-ga"
 
class Blog extends Component {
  componentDidMount() {
    ReactGA.set({ page: '/blog'})
    ReactGA.pageview('/blog')
  }

  render() {
    return (
      <div>
        <h2>Blog</h2>
      </div>
    );
  }
}
 
export default Blog;
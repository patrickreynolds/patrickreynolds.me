import React, { Component } from 'react';
import {
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import Temp from "./pages/Temp"

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.temp = true
  }

  render() {
    if (this.temp) {
      return (
        <div className="app">
          <Temp></Temp>
        </div>)
      } else {
        return (
          <div className="app">
            <header className="header">
              <ul className="header-nav">
                <NavLink to="/work" style={{ textDecoration: 'none' }}><h6 className="header-nav-item black-50">Work</h6></NavLink>
                <NavLink to="/blog" style={{ textDecoration: 'none' }}><h6 className="header-nav-item black-50">Blog</h6></NavLink>
                <NavLink to="/about-me" style={{ textDecoration: 'none' }}><h6 className="header-nav-item black-50">Amout me</h6></NavLink>
              </ul>
            </header>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </div>
            <Footer></Footer>
          </div>
        )
      }
  }
}

export default App;

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

    this.temp = false
  }

  render() {
    if (this.temp) {
      return (
        <div>
        <div className="container">
          {/* <Temp></Temp> */ }
          <div className="row">
            <div className="col-4 col-4-sm item-1"></div>
            <div className="col-4 col-4-sm item-2"></div>
            <div className="col-4 col-4-sm item-3"></div>
          </div>
        </div>
        <div className="container">
          {/* <Temp></Temp> */ }
          <div className="row">
            <div className="item-4 col-4 col-4-sm"></div>
            <div className="item-5 col-4 col-4-sm"></div>
          </div>
        </div>
        </div>
      )
      } else {
        return (
          <div className="app col-12">
            <header className="container header">
              <div className="row">
                <div className="col-4 col-sm-12 header-name">
                  <NavLink to="/" style={{ textDecoration: 'none' }}><h6 className="black-50">Patrick Reynolds</h6></NavLink>
                </div>
                <div className="col-8 col-sm-12">
                  <div className="header-nav right">
                    <NavLink to="/work" style={{ textDecoration: 'none' }}><h6 className="header-nav-item black-50">Work</h6></NavLink>
                    <NavLink to="/blog" style={{ textDecoration: 'none' }}><h6 className="header-nav-item black-50">Blog</h6></NavLink>
                    <NavLink to="/about-me" style={{ textDecoration: 'none' }}><h6 className="header-nav-item black-50">About</h6></NavLink>
                  </div>
                </div>
              </div>
            </header>
            <div className="content container">
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

import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer"
import Temp from "./Temp"

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
        <HashRouter>
          <div className="app">
            <header className="header">
              <NavLink exact to="/" className="header-name" style={{ textDecoration: 'none' }}><h1>Patrick Reynolds</h1></NavLink>
              <ul className="header-nav">
                <NavLink to="/about" style={{ textDecoration: 'none' }}><li className="header-nav-item">About</li></NavLink>
                <NavLink to="/contact" style={{ textDecoration: 'none' }}><li className="header-nav-item">Contact</li></NavLink>
              </ul>
            </header>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </div>
            <Footer></Footer>
          </div>
        </HashRouter>
        )
      }
  }
}

export default App;

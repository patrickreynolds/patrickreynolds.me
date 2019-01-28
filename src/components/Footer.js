import React, { Component } from "react";
 
const LinkStyle = {
  textDecoration: 'none',
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <ul className="footer-nav">
            <a style={LinkStyle} target="_blank" rel="external" href="https://linkedin.com/in/patrickscottreynolds"><h6 className="footer-nav-item black-50">Linkedin</h6></a>
            <a style={LinkStyle} target="_blank" rel="external" href="https://twitter.com/impatreynolds"><h6 className="footer-nav-item black-50">Twitter</h6></a>
            <a style={LinkStyle} target="_blank" rel="external" href="https://www.instagram.com/patrick.reynolds"><h6 className="footer-nav-item black-50">Instagram</h6></a>
            <a style={LinkStyle} target="_blank" rel="external" href="https://dribbble.com/patrickreynolds"><h6 className="footer-nav-item black-50">Dribbble</h6></a>
          </ul>
          <p className="copyright black-50">Designed and built by Patrick Reynolds. Copyright 2019 ©</p>
        </div>
      </footer>
    );
  }
}
 
export default Footer;
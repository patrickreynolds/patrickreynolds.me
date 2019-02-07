import React, { Component } from "react";
 
const hrStyle = {
  backgroundColor: 'var(--black-20)',
  height: '1px',
}

class HR extends Component {
  render() {
    return (
      <div className="col-12" style={hrStyle}></div>
    );
  }
}

export default HR;
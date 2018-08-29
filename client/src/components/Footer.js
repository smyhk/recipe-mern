import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }

  render() {
    return (
      <div>
        <h4>I am the footer for now</h4>
      </div>
    );
  }
}

export default Footer;

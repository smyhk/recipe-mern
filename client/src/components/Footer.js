import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            {"Brandi's Recipe Site"} &copy; {this.state.year}
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;

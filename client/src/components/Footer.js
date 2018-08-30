import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }

  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <NavLink className="grey-text text-lighten-3" to="#!">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink className="grey-text text-lighten-3" to="#!">
                    Legal
                  </NavLink>
                </li>
                <li>
                  <NavLink className="grey-text text-lighten-3" to="#!">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="grey-text text-lighten-3" to="#!">
                    SmyhkTech
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © {this.state.year} SmyhkTech Solutions
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

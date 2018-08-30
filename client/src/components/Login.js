import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../config';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  login = (e) => {
    const { history } = this.props;
    e.preventDefault();
    auth
      .loginWithEmailAndPassword(this.state.email, this.state.password)
      .then((authUser) => {
        history.push('/');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  signup = (e) => {
    const { history } = this.props;
    e.preventDefault();
    auth
      .signupWithEmailAndPassword(this.state.email, this.state.password)
      .then((authUser) => {
        history.push('/');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              {"We'll never share your email with anyone else."}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button
            disabled={isInvalid}
            type="submit"
            onClick={this.login}
            className="btn btn-primary"
          >
            Login
          </button>
          <button
            disabled={isInvalid}
            onClick={this.signup}
            style={{ marginLeft: '25px' }}
            className="btn btn-success"
          >
            Signup
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}
export default withRouter(Login);

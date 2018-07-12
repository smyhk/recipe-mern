import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'; // for binding to component
import { addChefMutation } from '../queries/queries';

class AddChef extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  sumbitForm(e) {
    e.preventDefault();
    this.props.addChefMutation({
      variables: {
        username: this.state.username
      }
    });
    // clear form after submit
    var frm = document.getElementById('add-chef');
    frm.reset();
  }

  render() {
    return (
      <div className="container">
        <h2>Add a Chef</h2>
        <form id="add-chef" onSubmit={this.sumbitForm.bind(this)} >
          <div className="form-group">
            <label>Chef name:</label>
            <input className="form-control " type="text" onChange={(e) => this.setState({ username: e.target.value })} />
          </div>

          <button>+</button>
        </form>
      </div>
    );
  }
}

export default compose(
  graphql(addChefMutation, { name: 'addChefMutation'})
)(AddChef);
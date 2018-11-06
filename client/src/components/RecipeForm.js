import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'; // for binding to component
import {
  // getChefsQuery,
  addRecipeMutation
  // getRecipesQuery
} from '../queries/queries';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: '',
      directions: '',
      prepTime: 0,
      cookTime: 0,
      chefId: localStorage.getItem('user')
    };
  }
  // displayChefs() {
  //   var data = this.props.getChefsQuery;
  //   if (data.loading) {
  //     return <option disabled>Loading...</option>;
  //   } else {
  //     return data.chefs.map(chef => {
  //       return (
  //         <option key={chef.id} value={chef.id}>
  //           {chef.username}
  //         </option>
  //       );
  //     });
  //   }
  // }

  sumbitForm = (e) => {
    e.preventDefault();
    this.props.addRecipeMutation({
      variables: {
        name: this.state.name,
        ingredients: this.state.ingredients,
        directions: this.state.directions,
        prepTime: this.state.prepTime,
        cookTime: this.state.cookTime,
        chefId: this.state.chefId
      }
      // refetchQueries: [{ query: getRecipesQuery }]
    });
    // clear form after submit
    var frm = document.getElementById('add-recipe');
    frm.reset();
  };

  render() {
    return (
      <div className="container">
        <h2>Add a recipe to the database</h2>
        <form id="add-recipe" onSubmit={this.sumbitForm}>
          <div className="form-group">
            <label>Recipe name:</label>
            <input
              className="form-control"
              type="text"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Ingredients:</label>
            <textarea
              className="form-control"
              type="text"
              onChange={(e) => this.setState({ ingredients: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Directions:</label>
            <textarea
              className="form-control"
              type="text"
              onChange={(e) => this.setState({ directions: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Prep Time:</label>
            <input
              className="form-control"
              type="text"
              placeholder="minutes..."
              onChange={(e) => this.setState({ prepTime: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Cook Time:</label>
            <input
              className="form-control"
              type="text"
              placeholder="minutes..."
              onChange={(e) => this.setState({ cookTime: e.target.value })}
            />
          </div>

          {/* <div className="form-group">
            <label>Chef:</label>
            <select
              className="form-control"
              onChange={e => this.setState({ chefId: e.target.value })}
            >
              <option>Select Chef</option>
              {this.displayChefs()}
            </select>
          </div> */}

          <button>+</button>
        </form>
      </div>
    );
  }
}

export default compose(
  //graphql(getChefsQuery, { name: 'getChefsQuery' }),
  graphql(addRecipeMutation, { name: 'addRecipeMutation' })
)(AddRecipe);

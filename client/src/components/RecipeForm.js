import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'; // for binding to component
import { getChefsQuery, addRecipeMutation, getRecipesQuery } from '../queries/queries';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: '',
      directions: '',
      prepTime: '',
      cookTime: '',
      chefId: ''
    }
  }
  displayChefs() {
    var data = this.props.getChefsQuery;
    if (data.loading) {
      return (<option disabled>Loading...</option>);
    } else {
      return data.chefs.map(chef => {
        return (<option key={ chef.id } value={ chef.id }>{ chef.username }</option>);
      });
    }
  }

  sumbitForm(e) {
    e.preventDefault();
    this.props.addRecipeMutation({
      variables: {
        name: this.state.name,
        ingredients: this.state.ingredients,
        directions: this.state.directions,
        prepTime: this.prepTime,
        cookTime: this.state.cookTime,
        chefId: this.state.chefId
      },
      refetchQueries: [ { query: getRecipesQuery } ]
    });
    // clear form after submit
    var frm = document.getElementById('add-recipe');
    frm.reset();
  }

  render() {
    return (
      <form id="add-recipe" onSubmit={ this.sumbitForm.bind(this) } >
        <div className="">
          <label>Recipe name:</label>
          <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
        </div>

        <div className="">
          <label>Ingredients:</label>
          <input type="text" onChange={ (e) => this.setState({ ingredients: e.target.value }) } />
        </div>

        <div className="">
          <label>Directions:</label>
          <input type="text" onChange={ (e) => this.setState({ directions: e.target.value }) } />
        </div>

        <div className="">
          <label>Prep Time:</label>
          <input type="text" onChange={ (e) => this.setState({ prepTime: e.target.value }) } />
        </div>

        <div className="">
          <label>Cook Time:</label>
          <input type="text" onChange={ (e) => this.setState({ cookTime: e.target.value }) } />
        </div>

        <div className="">
          <label>Chef:</label>
          <select onChange={ (e) => this.setState({ chefId: e.target.value }) } >
            <option>Select Chef</option>
            { this.displayChefs() }
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getChefsQuery, { name: 'getChefsQuery' }),
  graphql(addRecipeMutation, { name: 'addRecipeMutation'})
)(AddRecipe);
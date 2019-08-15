import React from 'react';
import './App.css';

import SearchForm from './Components/SearchForm';
import RecipeCard from './Components/RecipeCard';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    }
  }

  callback = (hits) => {
    let recipes = hits.map((recipe) => {
      return recipe.recipe;
    });
    this.setState({
      recipes: recipes
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Edamam Recipe Search</h1>
        </div>
        <SearchForm callback={this.callback} />
        <div className="recipe-section">
        {
          this.state.recipes.map((recipe, index) => {
            return <RecipeCard 
                      title={recipe.label}
                      calories={recipe.calories}
                      imgURL={recipe.image}
                      key={index}
                    />
          })
        }
        </div>
      </div>
    );
  }
}

export default App;

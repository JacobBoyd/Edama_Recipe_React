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

  callback = (recipeHits) => {
    this.setState({
      recipes: recipeHits
    })
  }

  render() {
    return (
      <div className="App">
        <SearchForm callback={this.callback} />
        {
          this.state.recipes.map((recipe, index) => {
            return <RecipeCard 
                      title={recipe.recipe.label}
                      calories={recipe.recipe.calories}
                      imgURL={recipe.recipe.image}
                      key={index}
                    />
          })
        }
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

import SearchForm from './Components/SearchForm';
import RecipeCard from './Components/RecipeCard';

function App() {
  // const request = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`;

  // const updateRecipes = (hits) =>  {
  //   console.table(hits);
  // }


  return (
    <div className="App">
      <SearchForm />
      <RecipeCard />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

//This is a component
const App = () => {
  const APP_ID = "38e3c20f";
  const APP_KEY = "5f12566c5b6ed519fca445f223f5334b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipe();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="Search-form">
        <input
          className="Search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="Search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="Recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

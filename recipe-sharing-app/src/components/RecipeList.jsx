import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 && <p>No recipes found. Try a different search!</p>}
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            marginBottom: '16px',
            border: '1px solid #ccc',
            padding: '8px',
            borderRadius: '4px',
          }}
        >
          <h3>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
              {recipe.title}
            </Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

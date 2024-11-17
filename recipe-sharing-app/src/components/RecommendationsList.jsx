import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available. Add some favorites to get personalized suggestions!</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '16px', border: '1px solid #ccc', padding: '8px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;

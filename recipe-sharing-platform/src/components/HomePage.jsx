import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
        <Link
          to="/add-recipe"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Recipe
        </Link>
      </div>
      {/* Rest of the HomePage component (recipe cards grid, etc.) */}
    </div>
  );
};

export default HomePage;

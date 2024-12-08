import React, { useState } from "react";

const AddRecipeForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Access the input's name and value
    setFormData({ ...formData, [name]: value }); // Update state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add logic to process the form data (e.g., save to backend or state)
    setFormData({ title: "", ingredients: "", steps: "" }); // Reset form
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title" // Matches the state key
            value={formData.title}
            onChange={handleChange} // Updates the state with target.value
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter the recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-bold mb-2"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients" // Matches the state key
            value={formData.ingredients}
            onChange={handleChange} // Updates the state with target.value
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="List the ingredients, separated by commas"
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 font-bold mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps" // Matches the state key
            value={formData.steps}
            onChange={handleChange} // Updates the state with target.value
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="6"
            placeholder="Describe the preparation steps"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;

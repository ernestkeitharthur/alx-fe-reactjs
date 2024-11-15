import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRecipeForm from '/src/components/AddRecipeForm'
import RecipeList from '/src/components/RecipeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddRecipeForm />
      <RecipeList />
    </>
  )
}

export default App

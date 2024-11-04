import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/public/vite.svg'
import './App.css'
import WelcomeMessage from '/src/components/WelcomeMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WelcomeMessage />
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/public/vite.svg'
import './App.css'
import WelcomeMessage from '/src/components/WelcomeMessage'
import Header from '/src/components/Header'
import MainContent from '/src/components/MainContent'
import Footer from '/src/components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WelcomeMessage />
    <Header />
    <MainContent />
    <Footer />
    </>
  )
}

export default App

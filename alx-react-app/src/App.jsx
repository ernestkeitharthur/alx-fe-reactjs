import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/public/vite.svg'
import './App.css'
import WelcomeMessage from '/src/components/WelcomeMessage'
import Header from '/src/components/Header'
import MainContent from '/src/components/MainContent'
import Footer from '/src/components/Footer'
import UserProfile from '/src/components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WelcomeMessage />
    <Header />
    <MainContent />
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>
    <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div>
        <h1>My React App with Routing</h1>

        {/* Define the Routes for different paths */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />

          {/* About Route */}
          <Route path="/about" element={<AboutPage />} />

          {/* Contact Route */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App

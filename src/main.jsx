import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <header className="nav-bar">
        <Link to="/"><h1>#VANLIFE</h1></Link>
        <nav className="links">
          <Link to="/about">About</Link>
          <Link to="/about">Vans</Link>
        </nav>
      </header>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>#VANLIFE</footer>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

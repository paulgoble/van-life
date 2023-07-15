import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="nav-bar">
        <Link to="/"><h1>#VANLIFE</h1></Link>
        <nav className="links">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
  )
}
import { Link, NavLink } from "react-router-dom"
import imageUrl from '../assets/Profile_Icon-mc42.png'

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <header className="nav-bar">
        <Link to="/"><h1>#VANLIFE</h1></Link>
        <nav className="links">
          <NavLink
            to="/host"
            style={({ isActive }) => isActive ? activeStyle : null}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => isActive ? activeStyle : null}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            style={({ isActive }) => isActive ? activeStyle : null}
          >
            Vans
          </NavLink>
          <Link to="login" className="login-link">
            <img src={imageUrl} alt="login" height="25" className="login-icon" />
          </Link>
        </nav>
      </header>
  )
}
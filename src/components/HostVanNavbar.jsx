import { NavLink } from "react-router-dom"

export default function HostVansLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <>
      <nav className="mt-175 links">
        <NavLink
          to="."
          end
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Photos
        </NavLink>
      </nav>
    </>
  )
}
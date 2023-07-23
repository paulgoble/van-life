import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  // Old way of protecting routes without a loader:
  // const isLoggedIn = false
  // if (!isLoggedIn) return <Navigate to="/login" /> // this doesn't work with loaders!

  return (
    <>
      <nav className="host-nav links">
        <NavLink
          to="."
          end
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}
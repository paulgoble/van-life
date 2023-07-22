import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="main">
      <h1>404 Page Not Found</h1>
      <Link to="/">
        <button className="button-sm">Return to Home</button>
      </Link>
    </div>
  )
}
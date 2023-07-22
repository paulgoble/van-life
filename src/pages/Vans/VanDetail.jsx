import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom"

export default function VanDetail() {
  const [van, setVan] = useState(null);
  const { id } = useParams()
  const { state } = useLocation()

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then(response => response.json())
      .then(data => setVan(data.vans))
  }, [id]);

  if (!van) return (
    <h1>Loading...</h1> // 404 bug!
  )

  const search = "?" + state?.search || ""
  const type = state?.search?.slice(5) || "all"

  return (
    <div className="main">
      <Link to={`/vans${search}`}>&larr; &nbsp;
        <span style={{ textDecoration: 'underline'}}>Back to {type} vans</span>
      </Link>
      <div className="van-detail">
        <img src={van.imageUrl} alt="image of van" />
        <button className={`button-sm ${van.type}`}>{van.type}</button>
        <h2 className="mt-175">{van.name}</h2>
        <p>{van.description}</p>
      </div>
    </div>
  )
}
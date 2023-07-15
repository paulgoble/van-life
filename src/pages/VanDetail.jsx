import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export default function VanDetail() {
  const [van, setVan] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then(response => response.json())
      .then(data => setVan(data.vans))
  }, [id]);

  if (!van) return (
    <h1>Loading...</h1>
  )

  return (
    <div className="main">
      <div className="van-detail">
        <img src={van.imageUrl} alt="image of van" />
        <button className={`button-sm ${van.type}`}>{van.type}</button>
        <h2 className="mt-175">{van.name}</h2>
        <p>{van.description}</p>
      </div>
    </div>
  )
}
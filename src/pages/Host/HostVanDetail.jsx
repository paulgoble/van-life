import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom"
import HostVansLayout from "../../components/HostVanNavbar";

export default function HostVanNavbar() {
  const [van, setVan] = useState(null);
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
      <Link to="/host/vans">&larr; &nbsp;
        <span style={{ textDecoration: 'underline'}}>Back to all vans</span>
      </Link>
      <div className="hostvan-detail mt-175">
        <div className="van-info">
          <img src={van.imageUrl} width="200" />
          <div>
            <button className={`button-sm ${van.type}`}>{van.type}</button>
            <div>
              <h2>{van.name}</h2> <span>${van.price}/day</span>
            </div>
          </div>
        </div>
        <HostVansLayout />
        <Outlet context={{ van }}/>
      </div>
    </div>
  )
}
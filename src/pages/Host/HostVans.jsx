import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then(response => response.json())
      .then(data => setVans(data.vans))
  }, []);

  if (vans.length === 0) return (
    <h1>Loading...</h1>
  )


  return (
    <div className="main">
      <h1>Your listed vans</h1>
      {vans.map(van => (
        <Link to={van.id} key={van.id}>
          <div className="hostvan-tile">
            <img src={van.imageUrl} width="100" height="100" />
            <div>
              <h3>{van.name}</h3> ${van.price}<span>/day</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    fetch("/api/vans")
      .then(response => response.json())
      .then(data => setVans(data.vans))
  }, []);

  if (!vans) return (
    <h1>Loading...</h1>
  )

  const vanElements = vans.map(van => (
            <Link to={van.id} className="van-tile" key={van.id}>
              <img src={van.imageUrl} width="200" height="200" />
              <div className="van-info">
                <h3>{van.name}</h3> ${van.price}<span>/day</span>
              </div>
              <button className={`button-sm ${van.type}`}>{van.type}</button>
            </Link>
          ))

  return (
    <div className="main">
      <h1>Explore our van options</h1>
      <div className="button-group">
        <button className="button-sm" onClick={() => setFilter('simple')}>simple</button>
        <button className="button-sm" onClick={() => setFilter('luxury')}>luxury</button>
        <button className="button-sm" onClick={() => setFilter('rugged')}>rugged</button>
        <button className="button-clear" onClick={() => setFilter(null)}>Clear filters</button>
      </div>
      <div className="vans-list">
        {vanElements}
      </div>
      
    </div>
  )
}
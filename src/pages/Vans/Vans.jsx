import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export const loader = () => {
  return getVans();
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vans = useLoaderData();

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
   ? vans.filter(van => van.type.toLowerCase() === typeFilter)
   : vans

  const vanElements = displayedVans
    .map(van => (
      <Link
        to={van.id}
        className="van-tile"
        key={van.id}
        state={{ search: searchParams.toString() }}
      >
        <img src={van.imageUrl} width="200" height="200" />
        <div className="van-info">
          <h3>{van.name}</h3> ${van.price}<span>/day</span>
        </div>
        <button className={`button-sm ${van.type}`}>{van.type}</button>
      </Link>
    ));

  return (
    <div className="main">
      <h1>Explore our van options</h1>
      <div className="button-group">
        <button
          className={
            typeFilter === "simple"
            ? "button-sm simple"
            : "button-sm van-type-select"
          }
          onClick={() => setSearchParams({ type:"simple" })}
        >
          simple
        </button>
        <button
          className={
            typeFilter === "luxury"
            ? "button-sm luxury"
            : "button-sm van-type-select"
          }
          onClick={() => setSearchParams({ type:"luxury" })}
        >
          luxury
        </button>
        <button
          className={
            typeFilter === "rugged"
            ? "button-sm rugged"
            : "button-sm van-type-select"
          }
          onClick={() => setSearchParams({ type:"rugged" })}
        >
          rugged
        </button>

        {typeFilter ? (
          <button
            className="button-clear" onClick={() => setSearchParams({})}
          >
            Clear filter
          </button>
        ) : null}

      </div>
      <div className="vans-list">
        {vanElements}
      </div>
      
    </div>
  );
}

//
// Utility Function 
//
// function genNewSearchParamString(key, value) {
//   const sp = new URLSearchParams(searchParams)
//   if (value === null) {
//     sp.delete(key)
//   } else {
//     sp.set(key, value)
//   }
//   return `?${sp.toString()}`
// }
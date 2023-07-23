import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export async function loader({ params }) {
  return await getVans(params.id);
}

export default function VanDetail() {
  const van = useLoaderData();
  const { state } = useLocation();

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
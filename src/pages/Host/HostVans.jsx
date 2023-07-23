import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
  await requireAuth(request);
  return await getHostVans();
}

export default function HostVans() {
  const vans = useLoaderData();

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
import { Link, Outlet, useLoaderData } from "react-router-dom"
import HostVansNav from "../../components/HostVansNav";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request, params }) {
  await requireAuth(request)
  return await getHostVans(params.id);
}

export default function HostVanDetail() {
  const van = useLoaderData();

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
        <HostVansNav />
        <Outlet context={{ van }}/>
      </div>
    </div>
  )
}
import { data } from "../mocks/db";

async function apiCall(err = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (err) reject({ message: "Failed to fetch" })
      resolve(data)
    }, 800)
  })
}

export async function getVans(id) {
  const vans = await apiCall()
  if (id) return vans.find((van) => id === van.id);
  return vans;
  // const url = id ? `api/vans/${id}` : "api/vans";
  // const res = await fetch(url);

  // if (!res.ok) {
  //   throw {
  //     message: "Failed to fetch vans",
  //     statusText: res.statusText,
  //     status: res.status,
  //   };
  // }

  // const data = await res.json();
  // return data.vans;
}

export async function getHostVans(id) {
  const vans = await apiCall()
  const hostVans = vans.filter((data) => data.hostId === "123");
  if (id) return hostVans.find((van) => id === van.id);
  return hostVans;
  // const url = id ? `api/host/vans/${id}` : "api/host/vans";
  // const res = await fetch(url);

  // if (!res.ok) {
  //   throw {
  //     message: "Failed to fetch vans",
  //     statusText: res.statusText,
  //     status: res.status,
  //   };
  // }

  // const data = await res.json();
  // return data.vans;
}

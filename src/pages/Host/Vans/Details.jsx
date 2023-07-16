import { useOutletContext } from "react-router-dom"

export default function Details() {
  const { van } = useOutletContext()

  return (
    <section>
      <p><b>Name: </b>{van.name}</p>
      <p><b>Category: </b>{van.type}</p>
      <p><b>Description: </b>{van.description}</p>
      <p><b>Visibility: </b>Public</p>
    </section>
  )
}
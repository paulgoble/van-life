import { useOutletContext } from "react-router-dom"

export default function Pricing() {
  const { van } = useOutletContext()

  return (
    <h3>${van.price}<span>/day</span></h3>
  )
}
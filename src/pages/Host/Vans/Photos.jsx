import { useOutletContext } from "react-router-dom"

export default function Photos() {
  const { van } = useOutletContext()

  return (
    <img src={van.imageUrl} width="100" className="mt-175"></img>
  )
}
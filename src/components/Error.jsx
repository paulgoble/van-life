import { useRouteError } from "react-router-dom"

export default function Error() {
  const error = useRouteError()

  return (
    <div className="main">
      <h3>ERROR: {error.message}</h3>
      <pre>{error.status} - {error.statusText}</pre>
    </div>
  )
}
import { Link } from "react-router-dom"
import "./NotAlllowed.css"

export default function UnAuthorized() {
  return (
    <div className="unauthorized">
      <h2>You must be authenticated to access this page.</h2>
      <Link to="/login">
      <span>
        Click here to login
      </span>
      </Link>
    </div>
  )
}
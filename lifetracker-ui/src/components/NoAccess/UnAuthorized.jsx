import { Link } from "react-router-dom"
import "./NotAlllowed.css"

export default function UnAuthorized() {
  return (
    <div className="unauthorized">
      <h2>You must be authenticated to access this page.</h2>
      <span>
        <Link to="/login"><p>Click here to login</p></Link>
      </span>
    </div>
  )
}
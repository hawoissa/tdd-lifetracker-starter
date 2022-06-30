import * as React from "react"
import { Link } from "react-router-dom"
import logo from "../assests/codepathlogo.svg"
import "./Navbar.css"

export default function Logo() {
   return (
      <div className="logo">
         <Link to="/">
            <img className="logopic" src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="Logo image" />
         </Link>
      </div>
   )
}
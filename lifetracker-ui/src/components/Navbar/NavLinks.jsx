import * as React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function NavLinks() {
   return  (
      <div className="nav-links">
         {/* <div className="content"> */}
            <ul className="links">
               <li><a href="/activity">Activity</a></li>
               <li>Excersise</li>
               <li><a href="/nutrition">Nutrition</a></li>
               <li>Sleep</li>
               <li><a href="/login">Login</a></li>
               <li className="signup"><a href="/register" className="signup">Sign Up</a></li>
            </ul>
            
               {/* <p>Activity</p>
               <p>Excersise</p>
               <p>Nutrition</p>
               <p>Sleep</p>
               <p>Login</p>
               <p>Sign Up</p> */}
         {/* </div> */}
      </div>
   )
}
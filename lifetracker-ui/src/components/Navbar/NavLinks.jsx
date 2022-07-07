import {useAuthContext} from "../../context/auth";
import * as React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function NavLinks() {
   const {isLoggedIn, handleLogout} = useAuthContext();
   return  (
      <div className="nav-links">
         {!isLoggedIn ?
            <ul className="links">
            <li><Link to="/activity">Activity</Link></li>
            <li><Link to="/nutrition">Nutrition</Link></li> 
            <li><Link to="/login">Login</Link></li>
            <li className="signup"><Link to="/register" className="signup">Sign Up</Link></li>
            </ul>          
         : 
         <ul className="links">  
            <li><Link to="/activity">Activity</Link></li>
            <li><Link to="/nutrition">Nutrition</Link></li>         
            <li className="signup" onClick={handleLogout}><Link to="/">Log Out</Link></li>
         </ul>    
         }
      </div>
   )
}
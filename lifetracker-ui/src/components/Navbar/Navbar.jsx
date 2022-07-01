import * as React from "react"
import Logo from "./Logo"
import NavLinks from "./NavLinks"
import "./Navbar.css"

export default function Navbar( props ) {
   return (
      <nav className="navbar">
         <div className="content">
            <div>
               <Logo />
            </div >
            {/* <div className="links"> */}
               <NavLinks isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
            {/* </div> */}
         </div>
      </nav>
   )
}
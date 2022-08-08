import * as React from "react"
import Logo from "./Logo"
import NavLinks from "./NavLinks"
import "./Navbar.css"

export default function Navbar() {

   return (
      <nav className="navbar">
         <div className="content">
            <div>
               <Logo />
            </div >
            {/* <div className="links"> */}
               <NavLinks />
            {/* </div> */}
         </div>
      </nav>
   )
}
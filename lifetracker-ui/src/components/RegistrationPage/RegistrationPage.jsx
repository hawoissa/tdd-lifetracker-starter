import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";

export default function RegistrationPage( props ) {
   // user={props.user} setUser={props.setUser}
   return (
      <div className="registration-page">
         <RegistrationForm setIsLoggedIn={props.setIsLoggedIn} user={props.user} setUser={props.setUser}/> 
      </div>
   )
 }

//  const navigate = useNavigate();
//  useEffect(() => {
//     if (props.user?.email) {
//        navigate("/activity")
//     }
//  }, [props.user, navigate]);
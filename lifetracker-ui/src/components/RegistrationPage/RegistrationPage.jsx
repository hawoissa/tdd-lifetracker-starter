import React from "react";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";

export default function RegistrationPage( props ) {

   return (
      <div className="registration-page">
         <RegistrationForm /> 
      </div>
   )
 } 

//  const navigate = useNavigate();
//  useEffect(() => {
//     if (props.user?.email) {
//        navigate("/activity")
//     }
//  }, [props.user, navigate]);
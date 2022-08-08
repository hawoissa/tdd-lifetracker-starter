import React from "react";
import LoginForm from "components/LoginForm/LoginForm";

export default function LoginPage() {
   
   return (
      <div className="login-page">
         <LoginForm />
      </div>
   ) 
 }

    // const navigate = useNavigate();
   // useEffect(() => {
   //    if (props.user?.email) {
   //       navigate("/activity")
   //    }
   // }, [props.user, navigate]);
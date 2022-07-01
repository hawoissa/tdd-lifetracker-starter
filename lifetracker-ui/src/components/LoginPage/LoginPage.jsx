import React from "react";
import LoginForm from "components/LoginForm/LoginForm";

export default function LoginPage( props ) {
   
   return (
      <div className="login-page">
         <LoginForm setIsLoggedIn={props.setIsLoggedIn} user={props.user} setUser={props.setUser}/>
      </div>
   )
 }

    // const navigate = useNavigate();
   // useEffect(() => {
   //    if (props.user?.email) {
   //       navigate("/activity")
   //    }
   // }, [props.user, navigate]);
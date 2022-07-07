import * as React from "react"
import {useAuthContext} from "../../context/auth";
import "./LoginForm.css"

export default function LoginForm() {
  const { setFormLogin, formLogin, handleLogin, setErrors, errors, isProccessing} = useAuthContext();

   const handleOnInputChange = (event) => {
      if (event.target.name === "email") {
        if (event.target.value.indexOf("@") === -1) {
          setErrors((err) => ({ ...err, email: "Please enter a valid email." }))
        } else {
          setErrors((err) => ({ ...err, email: null }))
        }
      }
      setFormLogin((form) => ({ ...form, [event.target.name]: event.target.value }))
    }

   return (
      <div className="login-form">
         <div className="form">
            <div><h1>Login</h1></div>
            <div className="form-input">
               <label htmlFor="email">Email</label>
               <input
               type="email"
               name="email"
               placeholder="Example@example.com"
               value={formLogin.email}
               onChange={handleOnInputChange}
               /> 
               {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-input">
               <label htmlFor="password">Password</label>
               <input
               type="password"
               name="password"
               placeholder="Password"
               value={formLogin.password}
               onChange={handleOnInputChange}
               /> 
               {errors.password && <span className="error">{errors.pasword}</span>}
            </div>
            
               <button className="submit-login" onClick= {handleLogin}> 
                  {/* {errors ? <p>An error is happening.</p> : <p>Login</p> } */}
                  {isProccessing ? <p>Loading...</p> : <p>Login</p> }
               </button>
            
         </div>
         {/* maybe include div for click to register if not user */}
      </div>
   )
}
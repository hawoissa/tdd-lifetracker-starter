import * as React from "react"
import { useState} from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import apiClient from "../../services/apiClient";
import axios from "axios"
import "./LoginForm.css"

export default function LoginForm( props) {
   const navigate = useNavigate();
   const [errors, setErrors] = useState({})
   const [isLoading, setIsLoading] = useState(false);
   const [form, setForm] = useState({
     email: "",
     password: "",
   })

   const handleOnInputChange = (event) => {
      if (event.target.name === "email") {
        if (event.target.value.indexOf("@") === -1) {
          setErrors((err) => ({ ...err, email: "Please enter a valid email." }))
        } else {
          setErrors((err) => ({ ...err, email: null }))
        }
      }
      setForm((form) => ({ ...form, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
      setIsLoading(false);
      setErrors((err) => ({ ...err, form: null }))   
      const { data } = await apiClient.loginUser({ email: form.email, password: form.password })
      if (data) {
        props.setUser(data.user);
        props.setIsLoggedIn(true);
        apiClient.setToken(data.token);
        navigate("/activity");
      }
      if (errors) {
        setErrors((err) => ({ ...err, form: errors }))
      }
      setIsLoading(false);
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
               value={form.email}
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
               value={form.password}
               onChange={handleOnInputChange}
               /> 
               {errors.password && <span className="error">{errors.pasword}</span>}
            </div>
            
               <button className="submit-login" onClick= {handleOnSubmit}> 
                  {/* {errors ? <p>An error is happening.</p> : <p>Login</p> } */}
                  {isLoading ? <p>Loading...</p> : <p>Login</p> }
               </button>
            
         </div>
         {/* maybe include div for click to register if not user */}
      </div>
   )
}
import * as React from "react"
import { useState } from "react"
import "./LoginForm.css"

export default function LoginForm() {
   // useNavigate to get to home
   const [isLoading, setIsLoading] = useState(false)
   const [errors, setErrors] = useState({})
   const [form, setForm] = useState({
     email: "",
     password: "",
   })

   const handleOnInputChange = (event) => {
      if (event.target.name === "email") {
        if (event.target.value.indexOf("@") === -1) {
          setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
        } else {
          setErrors((e) => ({ ...e, email: null }))
        }
      }
      setForm((form) => ({ ...form, [event.target.name]: event.target.value }))
    }

    const handleonSubmit = () => {
      console.log("submit-login working");
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
               {/* include an error */}
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
               {/* include an error */}
            </div>
            
               <button className="submit-login" onClick= {handleonSubmit}> 
                  Login
               </button>
            
         </div>
         {/* maybe include div for click to register if not user */}
      </div>
   )
}
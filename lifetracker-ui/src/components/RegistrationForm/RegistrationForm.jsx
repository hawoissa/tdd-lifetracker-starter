import * as React from "react"
import { useState } from "react"
import "./RegistrationForm.css"

export default function RegistrationForm() {
   /// to navigate into home const navigate = useNavigate()
   // loading page needed -- const [isLoading, setIsLoading] = useState(false)
   // error message needed -- const [errors, setErrors] = useState({})
   const [form, setForm] = useState({
     email: "",
     username: "",
     first_name: "",
     last_name: "",
     password: "",
     passwordConfirm: ""
   })

   const handleOnInputChange = (event) => {
      if (event.target.name === "password") {
         if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
           setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
         } else {
           setErrors((e) => ({ ...e, passwordConfirm: null }))
         }
       }
       if (event.target.name === "passwordConfirm") {
         if (form.password && form.password !== event.target.value) {
           setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
         } else {
           setErrors((e) => ({ ...e, passwordConfirm: null }))
         }
       }
       if (event.target.name === "email") {
         if (event.target.value.indexOf("@") === -1) {
           setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
         } else {
           setErrors((e) => ({ ...e, email: null }))
         }
       }
      setForm((form) => ({...form, [event.target.name]: event.target.value}));
   }

 

   return (
      <div className="registration-form">
         <div className="card">
            <div><h1>Register</h1></div>
            <div className="input-field">
               <label htmlFor="email">Email</label>
               <input 
               type="email" name="email"
               placeholder="email@email.com" value={form.email}
               onChange={handleOnInputChange}
               />
            </div>

            <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="username" name="username"
              placeholder="username" value={form.username}
              onChange={handleOnInputChange}
            />   
            </div>

            <div className="split">
               <div className="input-field">
               <label htmlFor="firstName">First Name</label>
               <input
               type="firstName" name="first_name"
               placeholder="First Name" value={form.first_name}
               onChange={handleOnInputChange}
               />   
               </div>

               <div className="input-field">
               <label htmlFor="last_name">Last Name</label>
               <input
               type="lastName" name="lastName"
               placeholder="Last Name" value={form.last_name}
               onChange={handleOnInputChange}
               />   
               </div>
            </div>

            <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password" name="password"
              placeholder="password" value={form.password}
              onChange={handleOnInputChange}
            />   
            </div>

            <div className="input-field">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="confirmpassword" name="confirmpassword"
              placeholder="password" value={form.passwordConfirm}
              onChange={handleOnInputChange}
            />   
            </div>

            <button className="submit-registration" >  {/* onClick= {signUpUser} */}
                  Create Account
            </button>

         </div>
      </div>
   )
}
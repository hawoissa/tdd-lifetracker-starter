import * as React from "react"
import {useAuthContext} from "../../context/auth";
import "./RegistrationForm.css"

export default function RegistrationForm() {
  const { setFormRegister, formRegister, handleRegister, setErrors, errors, isProccessing} = useAuthContext();

   const handleOnInputChange = (event) => {
      if (event.target.name === "password") {
         if (formRegister.passwordConfirm && formRegister.passwordConfirm !== event.target.value) {
           setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
         } else {
           setErrors((e) => ({ ...e, passwordConfirm: null }))
         }
       }
       if (event.target.name === "passwordConfirm") {
         if (formRegister.password && formRegister.password !== event.target.value) {
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
       setFormRegister((form) => ({...form, [event.target.name]: event.target.value}));
   }

   return (
      <div className="registration-form">
         <div className="card">
            <div><h1>Register</h1></div>
            <div className="input-field">
               <label htmlFor="email">Email</label>
               <input 
               type="text" name="email"
               placeholder="email@email.com" value={formRegister.email}
               onChange={handleOnInputChange}
               />
               {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text" name="username"
              placeholder="username" value={formRegister.username}
              onChange={handleOnInputChange}
            />   
            {errors.username && <span className="error">{errors.username}</span>}
            </div>

            <div className="split">
               <div className="input-field">
               <label htmlFor="firstName">First Name</label>
               <input
               type="text" name="first_name"
               placeholder="First Name" value={formRegister.first_name}
               onChange={handleOnInputChange}
               />   
               {errors.first_name && <span className="error">{errors.first_name}</span>}
               </div>

               <div className="input-field">
               <label htmlFor="last_name">Last Name</label>
               <input
               type="text" name="last_name"
               placeholder="Last Name" value={formRegister.last_name}
               onChange={handleOnInputChange}
               />   
               {errors.last_name && <span className="error">{errors.last_name}</span>}
               </div>
            </div>

            <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password" name="password"
              placeholder="password" value={formRegister.password}
              onChange={handleOnInputChange}
            />   
            {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="input-field">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password" name="passwordConfirm"
              placeholder="password" value={formRegister.passwordConfirm}
              onChange={handleOnInputChange}
            />   
            {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
            </div>

            <button className="submit-registration" onClick= {handleRegister}>  {/*  */}
                  {/* {errors ? <p>An error is happening.</p> : <p>Sign Up</p> } */}
                  {isProccessing ? <p>Loading...</p> : <p>Sign Up</p> }
            </button>

         </div>
      </div>
   )
}
import * as React from "react"
import { useState } from "react"
import "./RegistrationForm.css"
import apiClient from "../../services/apiClient";
import { useNavigate } from "react-router-dom"


export default function RegistrationForm( props ) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({})
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

   const handleOnSubmit = async () => {
    setIsLoading(false);
    setErrors((err) => ({ ...err, form: null }))   
    const { data, error } = await apiClient.signupUser({ 
      email: form.email, username: form.username, first_name: form.first_name,
      last_name: form.last_name, password: form.password, confirmpassword: form.passwordConfirm 
    });
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
               {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="username" name="username"
              placeholder="username" value={form.username}
              onChange={handleOnInputChange}
            />   
            {errors.username && <span className="error">{errors.username}</span>}
            </div>

            <div className="split">
               <div className="input-field">
               <label htmlFor="firstName">First Name</label>
               <input
               type="firstName" name="first_name"
               placeholder="First Name" value={form.first_name}
               onChange={handleOnInputChange}
               />   
               {errors.first_name && <span className="error">{errors.first_name}</span>}
               </div>

               <div className="input-field">
               <label htmlFor="last_name">Last Name</label>
               <input
               type="lastName" name="last_name"
               placeholder="Last Name" value={form.last_name}
               onChange={handleOnInputChange}
               />   
               {errors.last_name && <span className="error">{errors.last_name}</span>}
               </div>
            </div>

            <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password" name="password"
              placeholder="password" value={form.password}
              onChange={handleOnInputChange}
            />   
            {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="input-field">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password" name="passwordConfirm"
              placeholder="password" value={form.passwordConfirm}
              onChange={handleOnInputChange}
            />   
            {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
            </div>

            <button className="submit-registration" onClick= {handleOnSubmit}>  {/*  */}
                  {/* {errors ? <p>An error is happening.</p> : <p>Sign Up</p> } */}
                  {isLoading ? <p>Loading...</p> : <p>Sign Up</p> }
            </button>

         </div>
      </div>
   )
}
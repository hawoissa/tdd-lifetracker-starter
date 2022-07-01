import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nutrition.css"

export default function NutritionForm() {
   const [isLoading, setIsLoading] = useState(false);
   const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
      name: "",
      category: "",
      calories: "",
      image_url: ""
    });

    const handleOnInputChange = (event) => {
      setForm((form) => ({...form, [event.target.name]: event.target.value}));
   }

   return (
    <div className="nutrition-form">

      <div className="form">
         <h3>Add Nutrition Record</h3>
         <div className="input-field">
            <label htmlFor="name">Name</label>
            <input 
            type="name" name="name"
            placeholder="Name" value={form.name}
            onChange={handleOnInputChange}
            />
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
         </div>

         <div className="input-field">
            <label htmlFor="category">Category</label>
            <input 
            type="category" name="category"
            placeholder="Category" value={form.category}
            onChange={handleOnInputChange}
            />
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
         </div>

         <div className="input-field">
            <label htmlFor="calories">Calories</label>
            <input 
            type="calories" name="calories"
            placeholder="Calories" value={form.calories}
            onChange={handleOnInputChange}
            />
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
         </div>

         <div className="input-field">
            <label htmlFor="image_url">Image Url</label>
            <input 
            type="image_url" name="image_url"
            placeholder="http://pic.com/pic" value={form.image_url}
            onChange={handleOnInputChange}
            />
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
         </div>

         <button className="submit-nutrition" >  
                  {/* {errors ? <p>An error is happening.</p> : <p>Sign Up</p> } */}
                  {isLoading ? <p>Loading...</p> : <p>Record Nutrition</p> }
         </button>

         <div className="goback">
            <Link to="/nutrition"><p>or Click here to go back</p></Link>
         </div>

      </div>
    </div>
  )
}
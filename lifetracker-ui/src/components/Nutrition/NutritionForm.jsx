import React from "react"
import { Link, useNavigate } from "react-router-dom";
import { useNutritionContext } from "../../context/nutrition";
import "./Nutrition.css"

export default function NutritionForm() {
   const { isProccessing, form, errors, handleOnInputChange, handleOnForm } = useNutritionContext();
   const nav = useNavigate();
   const handleOnSubmit = () => {
      handleOnForm();
      nav("/nutrition");
   }

   return (
    <div className="nutrition-form">

      <div className="form">
         <h3>Add Nutrition Record</h3>
         <div className="input-field">
            <label htmlFor="name">Name</label>
            <input 
            type="text" name="name"
            placeholder="Name" value={form.name}
            onChange={handleOnInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>} 
         </div>

         <div className="input-field">
            <label htmlFor="category">Category</label>
            <input 
            type="text" name="category"
            placeholder="Category" value={form.category}
            onChange={handleOnInputChange}
            />
            {errors.category && <span className="error">{errors.category}</span>}
         </div>

         <div className="input-field">
            <label htmlFor="calories">Calories</label>
            <input 
            type="text" name="calories"
            placeholder="Calories" value={form.calories}
            onChange={handleOnInputChange}
            />
            {errors.calories && <span className="error">{errors.calories}</span>} 
         </div>

         <div className="input-field">
            <label htmlFor="image_url">Image Url</label>
            <input 
            type="text" name="image_url"
            placeholder="http://pic.com/pic" value={form.image_url}
            onChange={handleOnInputChange}
            />
             {errors.image_url && <span className="error">{errors.image_url}</span>} 
         </div>

         <button className="submit-nutrition" onClick={handleOnSubmit} >  
                  {/* {errors ? <p>An error is happening.</p> : <p>Sign Up</p> } */}
                  {isProccessing ? "Loading..." : "Save" }
         </button>

         <div className="goback">
            <Link to="/nutrition"><p>or Click here to go back</p></Link>
         </div>

      </div>
    </div>
  )
}
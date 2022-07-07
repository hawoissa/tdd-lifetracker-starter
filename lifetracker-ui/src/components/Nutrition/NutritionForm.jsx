import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import apiClient from "../../services/apiClient";
import "./Nutrition.css"

export default function NutritionForm({setNutrition, user}) {
   const [isLoading, setIsLoading] = useState(false);
   let nav = useNavigate();
   const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
      name: "",
      category: "",
      calories: "",
      image_url: ""
    });

    const handleOnInputChange = (event) => {
      setForm((f) => ({...f, [event.target.name]: event.target.value}));
   }

   const handleOnSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setErrors(f => [{...f, form: null}]);
      
      const newForm = async () => {
         const {data, err} = await apiClient.createNutrition(form);
         console.log(data);
      }
      const listNutrition = async () => {
         const {data, err} = await apiClient.listNutrition();
         if (data) {
            setNutrition(data.nutrition);
            nav("/nutrition");
         }
         if (err) {
            setErrors(err)
           
         }
         console.log("hello");
      }
      
      newForm();
      listNutrition();
      setIsLoading(false);
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
                  {isLoading ? "Loading..." : "Record Nutrition" }
         </button>

         <div className="goback">
            <Link to="/nutrition"><p>or Click here to go back</p></Link>
         </div>

      </div>
    </div>
  )
}
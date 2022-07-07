import React from "react";
import "./Nutrition.css"
import { Link } from "react-router-dom";

export default function NutritionCard({ id, name, calories, category, createdAt, imageUrl}) {
   
   return (
    <Link to={`/nutrition/${id}`} className="link">
      <div className="nutrition-card">
      
        <div className="card-head">
          <img src={imageUrl} alt="Image" />
          <h4>{name}</h4>
        </div>

        <div className="card-body">

          <div className="calories">
            <h4>Calories</h4>   
            <h2>{calories}</h2>   
          </div>
          {/* <div className="quantity">
            <h4>Quantity</h4>   
            <h2>1</h2>   
          </div> */}

        </div>

        <div className="card-footer">

            <p>{createdAt}</p>
            <p>{category}</p>

        </div>
      </div>
    </Link>
   )
 }
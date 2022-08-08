import React from "react";
import { Link } from "react-router-dom";
import NutritionFeed from "./NutritionFeed";
import Loading from "../Loading/Loading";
import { useNutritionContext } from "../../context/nutrition";
import "./Nutrition.css"

export default function NutritionOverview() {
   const {isProccessing } = useNutritionContext();
   return ( 
      <div className="nutrition-overview">
         { !isProccessing ?
         <div>
         <div className="subtitle">
            <h2>Overview of Nutrition</h2>
            <h3 className="submit-new"><Link to="/nutrition/create">Record New Nutrition</Link></h3>
         </div>
         <NutritionFeed />
         </div>
         : <Loading />}
      </div>
   )
 }
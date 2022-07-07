import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import NutritionFeed from "./NutritionFeed";
import "./Nutrition.css"

export default function NutritionOverview({ nutrition, setNutrition }) {
   
   return (
      <div className="nutrition-overview">
         <div className="subtitle">
            <h2>Overview of Nutrition</h2>
            <h3><Link to="/nutrition/create">Record New Nutrition</Link></h3>
         </div>
         <NutritionFeed nutrition={nutrition} setNutrition={setNutrition}/>
      </div>
   )
 }
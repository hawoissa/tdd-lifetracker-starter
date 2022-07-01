import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NutritionOverview from "./NutritionOverview";
import NutritionNew from "./NutritionNew";
import "./Nutrition.css"

export default function NutritionPage({ nutrition }) {
   
   return (
      <div className="nutrition-page">     
         <h1 className="title">Nutrition</h1>
         <Routes>
            <Route path="/" element={<NutritionOverview nutrition={nutrition}/>} /> 
            <Route path="/create" element={<NutritionNew />}/>
         </Routes>
      </div>
   )
 }

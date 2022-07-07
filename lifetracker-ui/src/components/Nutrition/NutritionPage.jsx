import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NutritionOverview from "./NutritionOverview";
import NutritionNew from "./NutritionNew";
import NutritionDetail from "./NutritionDetail";
import NotFound from "components/NotFound/NotFound";
import "./Nutrition.css"

export default function NutritionPage({ nutrition, setNutrition, user }) {
   
   return (
      <div className="nutrition-page">     
         <h1 className="title">Nutrition</h1>
         <Routes>
            <Route path="/" element={<NutritionOverview nutrition={nutrition} setNutrition={setNutrition}/>} /> 
            <Route path="/create" element={<NutritionNew setNutrition={setNutrition} user={user}/>}/>
            <Route path="/:nutritionId" element={<NutritionDetail />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   )
 }

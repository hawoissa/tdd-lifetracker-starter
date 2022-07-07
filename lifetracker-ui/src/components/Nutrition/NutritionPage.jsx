import React from "react";
import { Routes, Route, } from "react-router-dom";
import NutritionOverview from "./NutritionOverview";
import NutritionNew from "./NutritionNew";
import NutritionDetail from "./NutritionDetail";
import NotFound from "components/NotFound/NotFound";
import { NutritionContextProvider, useNutritionContext } from "../../context/nutrition";
import "./Nutrition.css"

export default function NutritionContainer() {
   return (
     <NutritionContextProvider>
       <NutritionPage />
     </NutritionContextProvider>
   )
 }

export function NutritionPage() {
   
   return (
      <div className="nutrition-page">     
         <h1 className="title">Nutrition</h1>
         <Routes>
            <Route path="/" element={<NutritionOverview />} /> 
            <Route path="/create" element={<NutritionNew />}/>
            <Route path="/:nutritionId" element={<NutritionDetail />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   )
 }

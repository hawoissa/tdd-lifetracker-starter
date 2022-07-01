import React from "react";
import NutritionCard from "./NutritionCard";
import "./Nutrition.css"

export default function NutritionFeed({ nutrition }) {
   console.log(nutrition);
   return (
      <div className="nutrition-feed">
         <div className="feed-card">
        { nutrition.length > 0 ?
         nutrition.map((card) => {
            return <NutritionCard name={card.name} calories={card.calories}
            category={card.category} createdAt={card.created_at} 
            imageUrl={card.image_url}/>
         }) : <h2 className="nothing">Nothing here yet</h2> 
        }
        </div>
      </div>
   )
 }
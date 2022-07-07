import React from "react";
import { useNutritionContext } from "../../context/nutrition";
import NutritionCard from "./NutritionCard";
import "./Nutrition.css"

export default function NutritionFeed() {
   const { nutritions, isProccessing } = useNutritionContext();
   return (
      <div className="nutrition-feed">
        { isProccessing ?  <h3>Loading...</h3> :
          <div className="content"> 
        { nutritions.length > 0 ?
          nutritions.map((card) => {
            let date = card.created_at.split("T")[0];
            return <NutritionCard name={card.name} calories={card.calories} 
            category={card.category} createdAt={date} id={card.id}
            imageUrl={card.image_url} key={card.id}/> 
       
        }) : <h2 className="nothing">Nothing here yet</h2> 
        } 
        </div> }
      </div>
   )
 }

  
  {/*  */}
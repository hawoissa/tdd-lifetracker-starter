import React from "react";
import { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";
import NutritionCard from "./NutritionCard";
import "./Nutrition.css"

export default function NutritionFeed({ nutrition, setNutrition }) {
  //get all nutrition data from user
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    const fetchNutrition = async () => {
      setIsLoading(true);
      const { data, error } = await apiClient.listNutrition();
      if (data) {      
        setNutrition(data.nutrition);
      }
      if (error) {
        setErrors(error);
      }
      setIsLoading(false);
    }
    fetchNutrition(); 
  }, [])
   return (
      <div className="nutrition-feed">
        {/* <div className="feed-card"> */}
        { isLoading ?  <h3>Loading...</h3> :
          <div className="content"> 
        { nutrition.length > 0 ?
          nutrition.map((card) => {
            let date = card.created_at.split("T")[0];
        
            return <NutritionCard name={card.name} calories={card.calories} 
            category={card.category} createdAt={date} id={card.id}
            imageUrl={card.image_url} key={card.id}/> 
       
        }) : <h2 className="nothing">Nothing here yet</h2> 
        } 
        </div> }
        {/* </div> */}
      </div>
   )
 }

  
  {/*  */}
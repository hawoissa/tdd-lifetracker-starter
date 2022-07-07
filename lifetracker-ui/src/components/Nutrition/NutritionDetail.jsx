import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../../services/apiClient";
import NutritionCard from "./NutritionCard"
import NotFound from "components/NotFound/NotFound"

export default function NutritionDetail({ }) {
   const {nutritionId} = useParams();
   const [product, setProduct] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   useEffect(() => {    
      const fetchNutritionByNumber = async () => {
        setIsLoading(true);
        const { data } = await apiClient.fetchNutritionById(nutritionId);
        console.log(nutritionId);
        if (data) {      
          setProduct(data.nutrition);
        }
        setIsLoading(false);
      }
      fetchNutritionByNumber();
    }, []);
   
   //let date = product?.created_at.split("T")[0];
   return (
      <div className="nutrition-detail">
         { !isLoading ?
         <div className="content">
            {product ?        
                  <NutritionCard name={product.name} calories={product.calories} 
                  category={product.category} createdAt={product.created_at} id={product.id}
                  imageUrl={product.image_url} key={product.id}/> 
               : <NotFound />}
         </div> : <h4>Loading...</h4>}
      </div>
   )
 }
import NutritionForm from "./NutritionForm"
import "./Nutrition.css"

export default function NutritionNew({setNutrition, user}) {
  return (
    <div className="nutrition-new">
      <NutritionForm />
    </div>
  )
}
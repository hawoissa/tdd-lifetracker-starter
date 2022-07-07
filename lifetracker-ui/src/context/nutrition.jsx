import { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../services/apiClient";
import { useAuthContext } from "./auth";

const NutritionContext = createContext(null);

export const NutritionContextProvider = ({ children }) => {
   const [nutritions, setNutritions] = useState({});
   const [initialized, setInitialized] = useState(false);
   const [isProccessing, setIsProccessing] = useState(false);
   const [errors, setErrors] = useState([]);
   const [form, setForm] = useState({
      name: "",
      category: "",
      calories: "",
      image_url: ""
   });

   const { isLoggedIn} = useAuthContext();

   useEffect(() => {
      const fetchNutrition = async () => {
         setInitialized(false);
         setIsProccessing(true);
         const { data, error } = await apiClient.listNutrition();
         if (data) {      
            setNutritions(data.nutrition);
         }
         if (error) {
            setErrors(error);
         }
         setIsProccessing(false);
         setInitialized(true);
         }
         if (isLoggedIn) {
            fetchNutrition(); 
         }
      }, []);

   const handleOnInputChange = (event) => {
      setForm((f) => ({...f, [event.target.name]: event.target.value}));
   }

   const handleOnForm = async () => {
      setIsProccessing(true);
      setErrors(f => [{...f, form: null}]);
      const newForm = async () => {
         const { data } = await apiClient.createNutrition(form);
      }
      const listNutrition = async () => {
         const {data, err} = await apiClient.listNutrition();
         if (data) {
            setNutritions(data.nutrition);
            setForm("");
         }
         if (err) {
            setErrors(err)        
         }
      }   
      newForm();
      listNutrition();
      setIsProccessing(false);
   }


   const nutritionValue = {
      nutritions, setNutritions,
      initialized, setInitialized,
      isProccessing, setIsProccessing,
      errors, setErrors,
      form, 
      handleOnInputChange, handleOnForm
   }

   return (
      <NutritionContext.Provider value={nutritionValue}>
         <>{children}</>
      </NutritionContext.Provider>
   )
}

export const useNutritionContext = () => useContext(NutritionContext);
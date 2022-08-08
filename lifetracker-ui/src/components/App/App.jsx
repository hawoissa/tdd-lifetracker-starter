import * as React from "react"
import apiClient from "../../services/apiClient";
import Home from "components/Home/Home";
import Navbar from "components/Navbar/Navbar";
import NotFound from "components/NotFound/NotFound";
import UnAuthorized from "components/NoAccess/UnAuthorized";
import NutritionPage from "components/Nutrition/NutritionPage";
import LoginPage from "components/LoginPage/LoginPage";
import RegistrationPage from "components/RegistrationPage/RegistrationPage";
import ActivityPage from "components/ActivityPage/ActivityFeed";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContextProvider, useAuthContext} from "../../context/auth";
import "./App.css"

export default function AppContainer() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  )
}

export function App() {
  const { user, setUser, isLoggedIn, setIsLoggedIn, handleLogout } = useAuthContext();
  
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
        <Navbar />
        <main>      
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/login" element={isLoggedIn ? <Navigate to="/activity"/> :<LoginPage />} />

            <Route path="/register" element={isLoggedIn ? <Navigate to="/activity"/> : <RegistrationPage />} />

            <Route path="/activity" element={isLoggedIn ? <ActivityPage /> : < UnAuthorized />} />

            <Route path="/nutrition/*" element={isLoggedIn ? <NutritionPage /> : <UnAuthorized />}/>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        </BrowserRouter>
      </React.Fragment> 
    </div>
  )
}

// const [user, setUser] = useState({});
// // const [token, setToken] = useState({});
// const [nutrition, setNutrition] = useState([]);

// useEffect(() => {
//   const fetchUser = async () => {
//     const { data } = await apiClient.fetchUserFromToken()
//     if (data) {
//       setUser(data.user)
//     }
//   }
//   //get token
// }, [])

// const addNutrition = (nutritionNew) => {
//   setNutrition((data) => [...data, nutritionNew]);
// }



import * as React from "react"
import apiClient from "../../services/apiClient";
import Home from "components/Home/Home"
import Navbar from "components/Navbar/Navbar"
import NotFound from "components/NotFound/NotFound";
import ActivityPage from "components/ActivityPage/ActivityPage";
import UnAuthorized from "components/NoAccess/UnAuthorized";
import NutritionPage from "components/Nutrition/NutritionPage";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "components/LoginPage/LoginPage";
import RegistrationPage from "components/RegistrationPage/RegistrationPage";
import "./App.css"


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [nutrition, setNutrition] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await apiClient.fetchUserFromToken()
      if (data) {
        setUser(data.user)
      }
    }
    const token = localStorage.getItem("lifetracker_token")
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);

  const handleLogout = async () => {
    await apiClient.logoutUser();
    setUser({});
    setIsLoggedIn(false);
  }

  //get all nutrition data from user
  useEffect(() => {
    const fetchNutrition = async () => {
      setIsLoading(true);
      const { data, error } = await apiClient.listNutrition();
      if (data) {
        setNutrition(data.nutrition);
      }
      if (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    fetchNutrition(); 
  }, [])

  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <main>      
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/login" element={isLoggedIn ? <Navigate to="/activity"/> :<LoginPage user={user} 
            setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>} />

            <Route path="/register" element={isLoggedIn ? <Navigate to="/activity"/> : <RegistrationPage user={user} 
            setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>} />

            <Route path="/activity" element={isLoggedIn ? <ActivityPage /> : < UnAuthorized />} />

            <Route path="/nutrition/*" element={isLoggedIn ? <NutritionPage nutrition={nutrition}/> : <UnAuthorized />}/>
            
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



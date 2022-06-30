import * as React from "react"
import Home from "components/Home/Home"
import Navbar from "components/Navbar/Navbar"
import LoginForm from "components/LoginForm/LoginForm";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
        <Navbar />
        <main>      
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </main>
        </BrowserRouter>
      </React.Fragment> 
    </div>
  )
}

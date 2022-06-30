import * as React from "react"
import "./Home.css"
import watch from "../assests/smartwatch.svg"
import pic from "../assests/daily-tasks.png"
import fitness from "../assests/fitness2.png"
import food from "../assests/food1.png"
import rest from "../assests/rest1.png"
import plan from "../assests/task.png"

export default function Home() {
   return (
      <div className="home">
         <div className="content">
            <div className="hero">
               <div className="image">
                  <img src={pic} alt="smart-watch"/>
               </div>
               <div className="words">
                  <h1 className="hero-title">Life Tracker</h1>
                  <p className="hero-message">Helping you take back control of your world</p>
               </div>
            </div>
            <div className="info">
               <div className="squares">
                  <img src={fitness} alt="fitness" />
                  <p>Fitness</p>
               </div>
               <div className="squares">
                  <img src={food} alt="food" />
                  <p>Food</p>
               </div>
               <div className="squares">
                  <img src={rest} alt="rest" />
                  <p>Rest</p>
               </div>
               <div className="squares">
                  <img src={plan} alt="plan" />
                  <p>Plan</p>
               </div>
            </div>
         </div>
      </div>
   )
}
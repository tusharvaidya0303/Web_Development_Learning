import { useState } from 'react'
import './App.css'
import Lottry from './Lottry'
import {sum} from "./helper";

function App() {

  let winCondition=(ticket)=>{
    return sum(ticket) === 15;
  }

  return (
    <div className="parent">
      <Lottry n={3} winCondition={winCondition}/>
    </div>
  )
}

export default App

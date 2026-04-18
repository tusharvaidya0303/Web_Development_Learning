import { useState } from 'react'
import './App.css'
import Lottry from './Lottry'

function App() {

  return (
    <div className="parent">
      <Lottry n={3} winningsum={15}/>
    </div>
  )
}

export default App

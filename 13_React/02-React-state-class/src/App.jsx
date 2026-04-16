import { useState } from 'react'
import './App.css'
import Counter from './counter'
import LikeButton from './likeButton'

function App() {

  return (
    <>
     <h1>States in React</h1>
     <Counter />
     <br />
     <LikeButton />
    </>
  )
}

export default App

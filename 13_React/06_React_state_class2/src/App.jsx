import { useState } from 'react'
import './App.css'
import Forms from "./Forms"
import CommentForm from './CommentForm'
import Comments from './Comments'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Forms/> */}
     {/* <CommentForm/> */}
     <Comments/>
    </>
  )
}

export default App

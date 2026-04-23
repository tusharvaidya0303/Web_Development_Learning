import { useState } from 'react'
import './App.css'
import Forms from "./Forms"
import Comments from './Comments'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Forms/> */}
     <Comments/>
    </>
  )
}

export default App

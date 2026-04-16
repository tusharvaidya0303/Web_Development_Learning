import { useState } from "react";
import './counter.css'
export default function Counter(){
    let [count, setCount] = useState(0);
    function incCount(){
        setCount(count += 1);
    }
    return(
        <>
        <h3>Count : {count}</h3>
        <button onClick={incCount}>Increase Count</button>
        </>
    )
}
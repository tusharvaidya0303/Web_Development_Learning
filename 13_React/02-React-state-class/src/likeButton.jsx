import './likeButton.css'
import { useState } from "react";
export default function LikeButton() {
    let [isliked, setIsLiked] = useState(false);
    let [clicks, setClicks] = useState(0);
    let togglelikes =() => {
        setIsLiked(!isliked);
        setClicks(clicks += 1);
    }
    return(
        <>
        <h3>Clicks : {clicks}</h3>
        <button onClick={togglelikes}>
            {isliked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i> }
        </button>
        </>
   )
}
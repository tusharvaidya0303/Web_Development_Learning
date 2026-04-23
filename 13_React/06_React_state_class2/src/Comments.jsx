import { useState } from "react";
import CommentForm from "./CommentForm";
import "./Comments.css"
export default function Comments() {
  let [comments, setComments] = useState([
    {
      userName: "-@tushar",
      remark: "Good job!",
      rating: 5,
    },
  ]);
  let addNewComment = (comment) => {
    setComments(currComment => [...currComment, comment]);
  };
  return (
    <div className="parent">
      <h3>All Comments</h3>
        {comments.map((comment,idx) => (
        <div className="comment" key={idx}>
        <span>{comment.remark}</span>
        <br />
        <span>(rating : {comment.rating})</span>
        <br />
        <p>{comment.userName}</p>
      </div>
        ))}
      <CommentForm addNewComment={addNewComment} />
    </div>
  );
}

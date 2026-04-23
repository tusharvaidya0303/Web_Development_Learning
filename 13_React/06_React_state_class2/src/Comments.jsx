import { useState } from "react";
export default function Comments() {
  let [comments, setComments] = useState({
    fullName: "",
    comment: "",
    rating: 5,
  });
  let handleChange = (event) => {
    setComments((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }
  
  let handleSubmit = (event) => {
    event.preventDefault();
    setComments({ fullName: "", comment: "", rating: 5 });
  };

  return (
    <div>
      <h1>Comments</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        &nbsp;&nbsp;
        <input
          type="text"
          placeholder="fullName"
          id="fullName"
          value={comments.fullName}
          onChange={handleChange}
          name="fullName"
        />
        <br />
        <br />
        <label htmlFor="comment">Comment</label>
        &nbsp;&nbsp;
        <input
          type=" textarea"
          placeholder="Add a Comment"
          id="comment"
          value={comments.comment}
          onChange={handleChange}
          name="comment"
        />
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        &nbsp;&nbsp;
        <input
          type="number"
          placeholder="Rating"
          id="rating"
          value={comments.rating}
          onChange={handleChange}
          name="rating"
          min="1"
          max="10"
        />
        <br />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

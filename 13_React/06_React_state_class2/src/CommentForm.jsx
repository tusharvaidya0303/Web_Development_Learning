import { useState } from "react";
export default function CommentForm({addNewComment}) {
  let [formData, setFormData] = useState({
    userName: "",
    remark: "",
    rating: 5,
  });
  let handleChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }
  
  let handleSubmit = (event) => {
    event.preventDefault();
    addNewComment(formData);
    setFormData({ userName: "", remark: "", rating: 5 });
  };

  return (
    <div>
      <h1>Comments</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Full Name</label>
        &nbsp;&nbsp;
        <input
          type="text"
          placeholder="userName"
          id="userName"
          value={formData.userName}
          onChange={handleChange}
          name="userName"
        />
        <br />
        <br />
        <label htmlFor="remark">Comment</label>
        &nbsp;&nbsp;
        <input
          type=" textarea"
          placeholder="Add a Comment"
          id="remark"
          value={formData.remark}
          onChange={handleChange}
          name="remark"
        />
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        &nbsp;&nbsp;
        <input
          type="number"
          placeholder="Rating"
          id="rating"
          value={formData.rating}
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

import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "User Name Required!";
  }
  return errors;
};
export default function CommentForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   userName: "",
  //   remark: "",
  //   rating: 5,
  const formik = useFormik({
    initialValues: {
      userName: "",
      remark: "",
      rating: 5,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addNewComment(values);
      resetForm();
    },
  });
  // let handleChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // }

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   addNewComment(formData);
  //   setFormData({ userName: "", remark: "", rating: 5 });
  // };

  return (
    <div>
      <h1>Comments</h1>
      <br />
      <br />
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="userName">Full Name</label>
        &nbsp;&nbsp;
        <input
          type="text"
          placeholder="userName"
          id="userName"
          onChange={formik.handleChange}
          value={formik.values.userName}
          name="userName"
        />
        {formik.touched.userName && formik.errors.userName ? (
          <p style={{ color: "red" }}>{formik.errors.userName}</p>
        ) : null}
        <br />
        <br />
        <label htmlFor="remark">Comment</label>
        &nbsp;&nbsp;
        <textarea
          placeholder="Add a Comment"
          id="remark"
          onChange={formik.handleChange}
          value={formik.values.remark}
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
          onChange={formik.handleChange}
          value={formik.values.rating}
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

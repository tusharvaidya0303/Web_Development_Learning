import { useState } from "react";
export default function Forms() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  let handleChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ fullName: "", userName: "", password: "" });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Enter your FullName"
          id="fullName"
          value={formData.fullName}
          onChange={handleChange}
          name="fullName"
        />
        <br /> <br />
        <label htmlFor="userName">User Name</label>
        &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Enter your User Name"
          value={formData.userName}
          onChange={handleChange}
          id="userName"
          name="userName"
        />
        <br /> <br />
        <label htmlFor="password">Password</label>
        &nbsp;&nbsp;
        <input
          type="Password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
          id="password"
          name="password"
        />
        <button>Submit</button>
      </form>
    </>
  );
}

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmployee() {
  let [employee, setEmployee] = useState({
    name: "",
    userName: "",
    email: "",
  });
  let navigate = useNavigate();
  let { name, userName, email } = employee;
  let handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      let response = await axios.post(
        `http://localhost:8080/grtsolutions/addemployee`,
        employee
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log("error occurred", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Register Employee</h2>
          <form onSubmit={handleSubmit}>
            {" "}
            {/* Add form element */}
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the name"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the UserName"
                name="userName"
                value={userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">
                email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link to="/">
              <button type="button" className="btn btn-outline-danger mx-2">
                Cancel
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

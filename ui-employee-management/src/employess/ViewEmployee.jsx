import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewEmployee() {
  let [employee, setEmployee] = useState({
    name: "",
    userName: "",
    email: "",
  });
  let { id } = useParams();
  //   let { name, userName, email } = employee;
  let loadEmployees = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8080/grtsolutions/getEmployee/${id}`
      );
      console.log(res.data);
      setEmployee(res.data);
    } catch (error) {
      console.log("error occured", error);
    }
  };
  useEffect(() => {
    loadEmployees();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {employee.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {employee.name}
                </li>
                <li className="list-group-item">
                  <b>UserName:</b>
                  {employee.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {employee.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;

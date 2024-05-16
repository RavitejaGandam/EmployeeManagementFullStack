import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  let [employess, setEmployees] = useState([]);

  let loadEmployees = async () => {
    let result = await axios.get(
      ` http://localhost:8080/grtsolutions/getAllEmployees`
    );
    console.log(result.data);
    setEmployees(result.data);
  };
  useEffect(() => {
    loadEmployees();
  }, []);
  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employess.map((employee, index) => (
              <tr>
                <th scope="row" key={index}>
                  {employee.id}
                </th>
                <td>{employee.userName}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>
                  <button className="btn btn-secondary mx-2">View</button>
                  <Link to={`/edit/${employee.id}`}>
                    <button className="btn btn-outline-primary mx-2">
                      Edit
                    </button>
                  </Link>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

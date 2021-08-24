import React from "react";
import { useState } from "react";
import MockData from "../../services/MOCK_DATA.json";

function DataTable() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <table className="table table-striped table-sm ">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
      </table>
      <div className="pre-scrollable">
        <table className="table table-striped table-sm">
          <tbody>
            {MockData.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.first_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                val.last_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                val.email.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((m) => (
              <tr key={m.id}>
                <td>{m.first_name}</td>
                <td>{m.last_name}</td>
                <td>{m.email}</td>
                <td>{m.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default DataTable;

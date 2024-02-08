import "./Insurance.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PolicyList = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('your-api-endpoint-here');
      setPolicies(response.data.policies);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h4 className="text-center">Update Policy</h4>
        </div>
        <table className="table table-hover table-bordered table-striped" id="dev-table">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Policy Name</th>
              <th>Category</th>
              <th>Sum Assurance</th>
              <th>Premium</th>
              <th>Tenure</th>
              <th>Creation Date</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{policy.policy_name}</td>
                <td>{policy.category}</td>
                <td>{policy.sum_assurance}</td>
                <td>{policy.premium}</td>
                <td>{policy.tenure}</td>
                <td>{policy.creation_date}</td>
                <td>
                  <a className="btn btn-success btn-sm" href={`update-policy/${policy.id}`}>
                    <span className="fa fa-edit"></span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PolicyList;

import React, { useEffect, useState } from 'react';
import './Customer.css'
import axios from 'axios';

const ApplyPolicy = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/policies'); // Replace '/api/policies' with your actual backend API endpoint
        setPolicies(response.data);
      } catch (error) {
        console.error('Error fetching policies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="text-center">Available Policies</h3>
        </div>
        <table className="table table-hover table-striped table-bordered" id="dev-table">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Policy Name</th>
              <th>Category</th>
              <th>Sum Assurance</th>
              <th>Premium</th>
              <th>Tenure</th>
              <th>Creation Date</th>
              <th>Action</th>
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
                  <a href={`/apply/${policy.id}`} className="btn btn-success btn-xs">Apply</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplyPolicy;

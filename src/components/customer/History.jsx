import React, { useState, useEffect } from 'react';
import './Customer.css'
import axios from 'axios';

const HistoryPage = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint
      setPolicies(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h4 className="text-center">History</h4>
        </div>
        <table className="table table-hover table-striped table-bordered" id="dev-table">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Policy Name</th>
              <th>Applied Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{policy.Policy}</td>
                <td>{policy.creation_date}</td>
                <td>{policy.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;

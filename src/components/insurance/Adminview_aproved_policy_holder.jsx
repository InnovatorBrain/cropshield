import './Insurance.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PolicyRecordList = () => {
  const [policyRecords, setPolicyRecords] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('your-api-endpoint-here');
      setPolicyRecords(response.data.policyrecords);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h4 className="text-center">Policy Holder Record</h4>
        </div>
        <table className="table table-hover table-bordered table-striped" id="dev-table">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Policy</th>
              <th>Customer</th>
              <th>Applied Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {policyRecords.map((record, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{record.Policy}</td>
                <td>{record.customer}</td>
                <td>{record.creation_date}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PolicyRecordList;

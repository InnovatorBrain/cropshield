import React, { useState, useEffect } from 'react';
import "./Insurance.css"
import axios from 'axios';

const AdminDashboard = () => {
  const [policyHolders, setPolicyHolders] = useState({
    total: 0,
    approved: 0,
    disapproved: 0,
    pending: 0
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('your-api-endpoint-here');
      const data = response.data;
      setPolicyHolders({
        total: data.total_policy_holder,
        approved: data.approved_policy_holder,
        disapproved: data.disapproved_policy_holder,
        pending: data.waiting_policy_holder
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* View Policy */}
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-view-policy" style={{ textDecoration: 'none', color: 'white' }}>View Policy</a></h6>
              <h2 className="text-right"><i className="fas fa-eye f-left"></i></h2>
            </div>
          </div>
        </div>

        {/* Add Policy */}
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-add-policy" style={{ textDecoration: 'none', color: 'white' }}>Add Policy</a></h6>
              <h2 className="text-right"><i className="fas fa-plus f-left"></i></h2>
            </div>
          </div>
        </div>

        {/* Update Policy */}
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-update-policy" style={{ textDecoration: 'none', color: 'white' }}>Update Policy</a></h6>
              <h2 className="text-right"><i className="fas fa-edit f-left"></i></h2>
            </div>
          </div>
        </div>

        {/* Delete Policy */}
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-delete-policy" style={{ textDecoration: 'none', color: 'white' }}>Delete Policy</a></h6>
              <h2 className="text-right"><i className="fas fa-trash f-left"></i></h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Applied Policy Holder */}
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-view-policy-holder" style={{ textDecoration: 'none', color: 'white' }}>Applied Policy Holder</a></h6>
              <h2 className="text-right"><i className="fas fa-user-cog f-left"></i><span>{policyHolders.total}</span></h2>
            </div>
          </div>
        </div>

        {/* Approved Policy Holder */}
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-view-approved-policy-holder" style={{ textDecoration: 'none', color: 'white' }}>Approved Policy Holder</a></h6>
              <h2 className="text-right"><i className="fas fa-user-check f-left"></i><span>{policyHolders.approved}</span></h2>
            </div>
          </div>
        </div>

        {/* Disapproved Policy Holder */}
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-view-disapproved-policy-holder" style={{ textDecoration: 'none', color: 'white' }}>Disapproved Policy Holder</a></h6>
              <h2 className="text-right"><i className="fas fa-user-times f-left"></i><span>{policyHolders.disapproved}</span></h2>
            </div>
          </div>
        </div>

        {/* Pending Policy Holder */}
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-view-waiting-policy-holder" style={{ textDecoration: 'none', color: 'white' }}>Pending Policy Holder</a></h6>
              <h2 className="text-right"><i className="fas fa-user-clock f-left"></i><span>{policyHolders.pending}</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

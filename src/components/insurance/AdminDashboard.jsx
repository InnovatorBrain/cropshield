import React from 'react';
import "./Insurance.css"

const AdminDashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-view-customer" style={{ textDecoration: 'none', color: 'white' }}>Total Registered User</a></h6>
              <h2 className="text-right"><i className="fas fa-users f-left"></i><span>{total_user}</span></h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-view-policy" style={{ textDecoration: 'none', color: 'white' }}>Listed Policies</a></h6>
              <h2 className="text-right"><i className="fab fa-product-hunt f-left"></i><span>{total_policy}</span></h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-view-category" style={{ textDecoration: 'none', color: 'white' }}>Listed Categories</a></h6>
              <h2 className="text-right"><i className="fas fa-list-alt f-left"></i><span>{total_category}</span></h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-question" style={{ textDecoration: 'none', color: 'white' }}>Total Question</a></h6>
              <h2 className="text-right"><i className="fas fa-question-circle f-left"></i><span>{total_question}</span></h2>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-view-policy-holder" style={{ textDecoration: 'none', color: 'white' }}>Applied Policy Holder</a></h6>
              <h2 className="text-right"><i className="fas fa-user-cog f-left"></i><span>{total_policy_holder}</span></h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-view-approved-policy-holder" style={{ textDecoration: 'none', color: 'white' }}>Approved Policy Holder</a></h6>
              <h2 className="text-right"><i className="fas fa-user-check f-left"></i><span>{approved_policy_holder}</span></h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-view-disapproved-policy-holder" style={{ textDecoration: 'none', color: 'white' }}>Disapproved Policy Holder</a></h6>
              <h2 className="text-right"><i className="fas fa-user-times f-left"></i><span>{disapproved_policy_holder}</span></h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20"><a href="admin-view-waiting-policy-holder" style={{ textDecoration: 'none', color: 'white' }}>Pending Policy Holder</a></h6>
              <h2 className="text-right"><i className="fas fa-user-clock f-left"></i><span>{waiting_policy_holder}</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React from 'react';
import "./Insurance.css"

const AdminDashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20">
                <a href="admin-view-category" style={{ textDecoration: 'none', color: 'white' }}>View Category</a>
              </h6>
              <h2 className="text-right"><i className="fas fa-eye f-left"></i></h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20">
                <a href="admin-add-category" style={{ textDecoration: 'none', color: 'white' }}>Add Category</a>
              </h6>
              <h2 className="text-right"><i className="fas fa-plus f-left"></i></h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20">
                <a href="admin-update-category" style={{ textDecoration: 'none', color: 'white' }}>Update Category</a>
              </h6>
              <h2 className="text-right"><i className="fas fa-edit f-left"></i></h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20">
                <a href="admin-delete-category" style={{ textDecoration: 'none', color: 'white' }}>Delete Category</a>
              </h6>
              <h2 className="text-right"><i className="fas fa-trash f-left"></i></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

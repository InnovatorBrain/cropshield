import React, { useState, useEffect } from 'react';
import './Customer.css'
import axios from 'axios';

const CustomerDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/customer/dashboard'); // Replace '/api/customer/dashboard' with your actual backend API endpoint
        setDashboardData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {dashboardData && (
          <>
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-blue order-card">
                <div className="card-block">
                  <h6 className="m-b-20"><a href="apply-policy" id="apply_policy_link" style={{ textDecoration: 'none', color: 'white' }}>Available Policy</a></h6>
                  <h2 className="text-right"><i className="fab fa-product-hunt f-left"></i><span>{dashboardData.available_policy}</span></h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-blue order-card">
                <div className="card-block">
                  <h6 className="m-b-20"><a href="history" id="applied_policy_link" style={{ textDecoration: 'none', color: 'white' }}>Applied Policy</a></h6>
                  <h2 className="text-right"><i className="fab fa-product-hunt f-left"></i><span>{dashboardData.applied_policy}</span></h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-blue order-card">
                <div className="card-block">
                  <h6 className="m-b-20"><a href="/" id="policy_categories_link" style={{ textDecoration: 'none', color: 'white' }}>Policy Categories</a></h6>
                  <h2 className="text-right"><i className="fas fa-list-alt f-left"></i><span>{dashboardData.total_category}</span></h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-blue order-card">
                <div className="card-block">
                  <h6 className="m-b-20"><a href="question-history" id="question_history_link" style={{ textDecoration: 'none', color: 'white' }}>Total Question Asked</a></h6>
                  <h2 className="text-right"><i className="fas fa-question-circle f-left"></i><span>{dashboardData.total_question}</span></h2>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;

import React, { useState, useEffect } from 'react';
import './Customer.css'
import axios from 'axios';

const QuestionHistoryPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h4 className="text-center">Asked Question History</h4>
        </div>
        <table className="table table-hover table-striped table-bordered" id="dev-table">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Admin Comment</th>
              <th>Asked Date</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{question.description}</td>
                <td>{question.admin_comment}</td>
                <td>{question.asked_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionHistoryPage;

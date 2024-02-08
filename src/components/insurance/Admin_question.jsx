import "./Insurance.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('your-api-endpoint-here');
      setQuestions(response.data.questions);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h4 className="text-center">Questions</h4>
        </div>
        <table className="table table-hover table-bordered table-striped" id="dev-table">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Problem</th>
              <th>Reply</th>
              <th>Asked Date</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{question.customer}</td>
                <td>{question.description}</td>
                <td>{question.admin_comment}</td>
                <td>{question.asked_date}</td>
                <td>
                  <a className="btn btn-success btn-sm" href={`update-question/${question.id}`}>
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

export default QuestionList;

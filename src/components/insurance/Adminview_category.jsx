import "./Insurance.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('your-api-endpoint-here');
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h4 className="text-center">Categories</h4>
        </div>
        <table className="table table-hover table-bordered table-striped" id="dev-table">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.category_name}</td>
                <td>{category.creation_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;

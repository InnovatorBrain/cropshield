import React, { useState } from 'react';
import "./Insurance.css"
import axios from 'axios';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send form data to the backend using Axios or any other method
      await axios.post('/api/add-category', { category_name: categoryName });
      
      // Clear form field after submission
      setCategoryName('');
      
      // Optionally, you can handle success or show a notification
      alert('Category added successfully!');
    } catch (error) {
      console.error('Error adding category:', error);
      // Optionally, you can handle errors or show a notification
      alert('Error adding category. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>ADD CATEGORY</h2>
      <form onSubmit={handleSubmit} style={{ margin: '100px', marginTop: '0px' }}>
        <div className="form-group">
          <label htmlFor="category_name">Category Name</label>
          <input
            type="text"
            className="form-control"
            id="category_name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Life Insurance"
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">ADD</button>
      </form>
    </div>
  );
};

export default AddCategory;

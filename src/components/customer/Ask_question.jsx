import React, { useState } from 'react';
import './Customer.css'
import axios from 'axios';

const AskQuestion = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/questions', { description }); // Replace '/api/questions' with your actual backend API endpoint
      console.log('Question submitted successfully:', response.data);
      // Optionally, handle success response (e.g., show a success message)
    } catch (error) {
      console.error('Error submitting question:', error);
      // Optionally, handle error (e.g., show an error message)
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>ASK QUESTION</h2>
      <form onSubmit={handleSubmit} autoComplete="off" style={{ margin: '100px', marginTop: '0px' }}>
        <div className="form-group">
          <label htmlFor="description">Problem</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            className="form-control"
            placeholder="Describe your problem here"
          />
        </div>
        <button type="submit" className="btn btn-primary">ASK</button>
      </form>
    </div>
  );
};

export default AskQuestion;

import React, { useEffect, useState } from 'react';
import './Insurance.css'
import axios from 'axios';

const AboutUs = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Fetch data using Axios
    axios.get('/api/quote')
      .then(response => {
        setQuote(response.data.quote);
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Insurance Management</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="jumbotron text-center">
        <h1 className="display-4">About Us!</h1>
        <p className="lead">{quote}</p>
        <hr className="my-4" />
        <p>Explore our Website.</p>
        <a className="btn btn-primary btn-lg" href="/" role="button">Home</a>
      </div>

      <footer className="footer">
        <div className="container text-center">
          <span className="text-muted">Insurance Management &copy; 2024</span>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;

import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import SplashScreen from './components/SplashScreen/SplashScreen';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Okies from './components/Okies/Okies';
import Footer from './components/Footer/Footer';



function App() {
  // SplashScreen
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 2-second loading delay
  }, []);

  return (
    <>
      {/* SplashScreen */}
      {isLoading ? (
        <SplashScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            {/* Home */}
            <Route path="/" element={<div className='HOME'><Navbar /><Carousel /><Okies /> <Footer /></div>} />
            <Route path="home/" element={<div className='HOME'><Navbar /><Carousel /> <Okies /><Footer /></div>} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

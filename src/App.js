import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// _________COMPONENTS__________
import SplashScreen from './components/SplashScreen/SplashScreen';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import SubHeading from './components/SubHeading/SubHeading';
import OfferLogo from './components/OfferLogo/OfferLogo';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Footer from './components/Footer/Footer';
// Register Page
import RegisterPage from './components/RegisterPage/RegisterPage';
// SignIn Page
import SignInPage from './components/SignInPage/SignInPage';
// Testing

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
            <Route path="/" element={<><div className='HOME'><Navbar /><Carousel /> <SubHeading hint="Harnessing Technology for Crop Prosperity" title="Shielding Your Harvest, Securing Your Future" text="Sow the seeds of security with CropShield, your digital ally in the fields. Seamlessly merging AI prowess with agricultural expertise, CropShield delivers swift and precise insurance solutions, empowering farmers to nurture their crops with unwavering assurance. Whether it's tilling the soil, nurturing fresh fruits, cultivating vegetables, or harvesting awesome wheats, CropShield stands as the guardian of your agricultural endeavors, ensuring resilience and prosperity with every harvest." />
              <OfferLogo /><GetInTouch /><Footer /></div></>} />
            <Route path="/home" element={<><div className='HOME'><Navbar /><Carousel /> <SubHeading hint="Harnessing Technology for Crop Prosperity" title="Shielding Your Harvest, Securing Your Future" text="Sow the seeds of security with CropShield, your digital ally in the fields. Seamlessly merging AI prowess with agricultural expertise, CropShield delivers swift and precise insurance solutions, empowering farmers to nurture their crops with unwavering assurance. Whether it's tilling the soil, nurturing fresh fruits, cultivating vegetables, or harvesting awesome wheats, CropShield stands as the guardian of your agricultural endeavors, ensuring resilience and prosperity with every harvest." />
              <OfferLogo /><GetInTouch /><Footer /></div></>} />
            {/* AboutUs */}
            <Route path="/AboutUs" element={<><div className='ABOUTUS'><Navbar /> <Footer /></div></>} />
            {/* Dashboard */}
            <Route path="/Dashboard" element={<><div className='DASHBOARD'><Navbar /> <Footer /></div></>} />
            {/* Register */}
            <Route path="/Register" element={<><div className='Register'><RegisterPage /></div></>} />
            {/* SignIn */}
            <Route path="/SignIn" element={<><div className='SignIn'><SignInPage /></div></>} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

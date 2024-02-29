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
// AboutUs Page
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import Headings from './components/Headings/Headings';
import AnimeCounter from './components/AnimeCounter/AnimeCounter';
// Support Page
import SupportHeader from './components/SupportHeader/SupportHeader';
// Testing
// USER-DASHBOARD
import { DashboardLayout, DashboardLayoutInsurance, DashboardLayoutApplyPolicy } from './components/Dashboard/index';

function App() {
  // SplashScreen
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200); // Simulating a 2-second loading delay
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
            <Route path="/" element={<><div className='HOME'><Navbar /><Carousel /> <SubHeading hint="AI and Blockchain-Based Crop Insurance System" title="Shielding Your Harvest, Securing Your Future" text="Sow the seeds of security with CropShield, your digital ally in the fields. Seamlessly merging AI prowess with agricultural expertise, CropShield delivers swift and precise insurance solutions, empowering farmers to nurture their crops with unwavering assurance. Whether it's tilling the soil, nurturing fresh fruits, cultivating vegetables, or harvesting awesome wheats, CropShield stands as the guardian of your agricultural endeavors, ensuring resilience and prosperity with every harvest." />
              <OfferLogo /><GetInTouch /><Footer /></div></>} />
            <Route path="/home" element={<><div className='HOME'><Navbar /><Carousel /> <SubHeading hint="AI and Blockchain-Based Crop Insurance System" title="Shielding Your Harvest, Securing Your Future" text="Sow the seeds of security with CropShield, your digital ally in the fields. Seamlessly merging AI prowess with agricultural expertise, CropShield delivers swift and precise insurance solutions, empowering farmers to nurture their crops with unwavering assurance. Whether it's tilling the soil, nurturing fresh fruits, cultivating vegetables, or harvesting awesome wheats, CropShield stands as the guardian of your agricultural endeavors, ensuring resilience and prosperity with every harvest." />
              <OfferLogo /><GetInTouch /><Footer /></div></>} />
            {/* AboutUs */}
            <Route path="/AboutUs" element={<><div className='ABOUTUS'><Navbar /><HeaderBlock /><Headings title="Explore Our Mission." text="From rural enthusiasts to seasoned agriculturists, and from local co-ops to global enterprises, our community leverages CropShield to enhance crop management, mitigate risks, and propel agricultural innovation." linkText="Learn more about our purpose" /><AnimeCounter /> <GetInTouch /><Footer /></div></>} />
            {/* Register */}
            <Route path="/Register" element={<><div className='Register'><RegisterPage /></div></>} />
            {/* Help & Support*/}
            <Route path="/help" element={<><div className='SUPPORT'><Navbar /> <SupportHeader title="Help & Support" /><GetInTouch /><Footer /></div></>} />
            {/* SignIn */}
            <Route path="/SignIn" element={<><div className='SignIn'><SignInPage /></div></>} />
            {/* Dashboard */}
            <Route path="/Dashboard" element={<><div className='DASHBOARD'> <DashboardLayout /></div></>} />
            <Route path="/Dashboard/insurance" element={<><div className='DASHBOARD'> <DashboardLayoutInsurance /></div></>} />
            <Route path="/Dashboard/apply-policy" element={<><div className='DASHBOARD'> <DashboardLayoutApplyPolicy /></div></>} />

            <Route path="*" element={<><div className='404Page'><Navbar /> <Headings title="Oops, we couldn't find that page." text="Sorry, it seems like you've wandered off the beaten path. Explore our mission elsewhere on our site, or navigate back to discover more about our initiatives and goals." link="/Home" linkText="CropShield home page" /><Footer /></div></>} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

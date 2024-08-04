import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Support from './pages/Support';
import Technology from './pages/Technology';
import ContactUs from './pages/ContactUs';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import UserDashboard from './pages/UserDashboard';
import UserGuide from './pages/UserGuide';
import FAQ from './pages/FAQ';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/support" element={<Support />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/features" element={<Features />} />
                <Route path="/howitworks" element={<HowItWorks />} />
                <Route path="/userdashboard" element={<UserDashboard />} />
                <Route path="/userguide" element={<UserGuide />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>
        </Router>
    );
};

export default App;

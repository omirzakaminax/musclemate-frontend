import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Support from './pages/Support';
import DataMonitoring from './pages/DataMonitoring';
import Technology from './pages/Technology';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/support" element={<Support />} />
                <Route path="/data-monitoring" element={<DataMonitoring />} />
                <Route path="/technology" element={<Technology />} />
            </Routes>
        </Router>
    );
};

export default App;

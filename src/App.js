// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Professional from './Pages/Professional';
import Northwoods from './Pages/Professional/Northwoods';
import Personal from './Pages/Personal'
import Spain from './Pages/Personal/Spain'
import Rockies from './Pages/Personal/Rockies';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/northwoods" element={<Northwoods />} />
        <Route path="/spain" element={<Spain />} />
        <Route path="/rockies" element={<Rockies/>} />
      </Routes>
    </Router>
  );
};

export default App;

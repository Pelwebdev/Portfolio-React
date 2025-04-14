import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../Common/Header';
import Home from '../Home/Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Contact from './Contact';

function Pages() {
  return (
    <>
      <Router>
        <Header />
        
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
    </>
  )
}
export default Pages
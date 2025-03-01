import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from '../auth/signup';
import Login from '../auth2/login';
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Sell from "../sellerpage/Sell";
import Buy from "../buyerpage/buy";

const Pages = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact /> {/* Add exact prop for root path */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sellerpage" element={<Sell />} />
        <Route path="/buyerpage" element={<Buy />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Pages;
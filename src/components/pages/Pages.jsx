import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from '../auth/signup';
import Login from '../auth2/login';
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Sell from "../sellerpage/Sell";
import Buy from "../buyerpage/buy";
import Profile from "../profile/profile";

const Pages = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page (no header/footer) */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Authenticated routes (with header/footer) */}
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/sellerpage"
          element={
            <>
              <Header />
              <Sell />
              <Footer />
            </>
          }
        />
        <Route
          path="/buyerpage"
          element={
            <>
              <Header />
              <Buy />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Header />
              <Services />
              <Footer />
            </>
          }
        />
       
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default Pages;
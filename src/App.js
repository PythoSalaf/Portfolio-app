import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { About, Home, Portfolio, Testimonial } from "./Pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

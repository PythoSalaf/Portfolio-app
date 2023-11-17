import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { Home } from "./Pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

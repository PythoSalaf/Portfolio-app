import React from "react";
import {
  About,
  Contact,
  Footer,
  Navbar,
  PortfolioSection,
  Review,
  SkillSection,
} from "./Components";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <SkillSection />
      <PortfolioSection />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

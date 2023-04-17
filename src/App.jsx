import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import Project from "./components/Project";
// import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import SocialLinks from "./components/SocialLinks";
import CompareImage from "./components/CompareImage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <CompareImage/>
      <Hero />
      <About />
      <Skills />
      {/* <Hireme /> */}
      {/* <Project /> */}
      <Contact />
      <Footer />
      <SocialLinks/>
    </div>
  );
};

export default App;

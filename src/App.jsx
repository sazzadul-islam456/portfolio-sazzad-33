import React from "react";
import "./App.css";
import Header from "./componentes/header/Header";
import Home from "./componentes/home/Home";
import About from "./componentes/about/About";
import Skills from "./componentes/skills/Skills";
import Services from "./componentes/services/Services";
import Qualification from "./componentes/qualification/Qualification";

import Contact from "./componentes/contact/Contact";
import Footer from "./componentes/contact/footer/Footer";
import ScrollUp from "./componentes/scrollup/ScrollUp";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;

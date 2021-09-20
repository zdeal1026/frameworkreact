import React, { useEffect } from "react";
import Header from "../src/components/Header/Header";
import About from "../src/components/pages/home/About";
import Works from "../src/components/pages/home/Works";
import Contact from "../src/components/pages/contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";

function App() {
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;

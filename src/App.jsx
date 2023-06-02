import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import About from "./Components/About";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      // Cancel the animation
      gsap.killTweensOf();
    };
  }, []);
  return (
    <div className="min-h-screen w-full relative bg-primary">
      <Header />
      <Hero />
      <About />
    </div>
  );
};

export default App;

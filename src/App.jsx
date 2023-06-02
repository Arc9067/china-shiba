import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import About from "./Components/About";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Token from "./Components/Token";
import Game from "./Components/Game";

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
      {/* <Header /> */}
      <Hero />
      <About />
      <Token />
      <Game />
    </div>
  );
};

export default App;

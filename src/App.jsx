import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
  }, []);
  return (
    <div className="min-h-screen w-full relative bg-primary">
      <Header />
      <Hero />
    </div>
  );
};

export default App;

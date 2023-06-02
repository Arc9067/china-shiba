import React, { useEffect } from "react";
import { gsap } from "gsap";
import Logo2 from "../assets/logo2.png";

const About = () => {
  useEffect(() => {
    const h1 = gsap.to(".h1", {
      text: `about chinese shiba`,
      ease: "power1.in",
      duration: 2,
      scrollTrigger: {
        trigger: ".about",
        toggleActions: "play none none none",
      },
    });
    const h2 = gsap.to(".about-para", {
      text: `chinese Shiba (chinese) is a token created to celebrate the fun and playful side of the cryptocurrency world. It is designed to provide an entertaining experience for users while ensuring transparency, fairness, and community-driven growth. By combining the interactive mobile game Shiba Run and unique tokenomics, chinese Shiba aims to captivate users and create a vibrant ecosystem.`,
      ease: "power1.in",
      duration: 2,
    });

    return () => {
      // Cancel the animation
      gsap.killTweensOf();
    };
  }, []);
  return (
    <section className="py-[50px] about w-full bg-text text-primary">
      <div className="container grid justify-between items-center lg:grid-cols-2 gap-10">
        <div className="">
          <h1 className="h1 text-4xl md:text-6xl capitalize font-Japanese_3017"></h1>
          <p className="text-primary about-para  font-mono mt-5"></p>
        </div>
        <img src={Logo2} alt="" className="md:max-w-md w-full lg:ml-auto" />
      </div>
    </section>
  );
};

export default About;

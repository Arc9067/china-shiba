import React, { useEffect } from "react";
import { gsap } from "gsap";

const About = () => {
  useEffect(() => {
    gsap.to(".h1", {
      text: `about china shiba`,
      ease: "power1.in",
      duration: 2,
      scrollTrigger: {
        trigger: ".about",
        toggleActions: "play none none none",
      },
    });
    gsap.to(".about-para", {
      text: `China Shiba (CHINA) is a token created to celebrate the fun and playful side of the cryptocurrency world. It is designed to provide an entertaining experience for users while ensuring transparency, fairness, and community-driven growth. By combining the interactive mobile game Shiba Run and unique tokenomics, China Shiba aims to captivate users and create a vibrant ecosystem.`,
      ease: "power1.in",
      duration: 2,
    });
  }, []);
  return (
    <section className="py-[50px] about w-full bg-text text-primary">
      <div className="container grid justify-between items-center lg:grid-cols-2 gap-10">
        <div className="">
          <h1 className="h1 text-4xl md:text-6xl capitalize font-Japanese_3017"></h1>
          <p className="text-primary about-para  font-mono mt-5"></p>
        </div>
      </div>
    </section>
  );
};

export default About;
import { gsap } from "gsap";
import React, { useEffect } from "react";

const Token = () => {
  useEffect(() => {
    gsap.to(".token-h1", {
      text: `tokenomics`,
      ease: "power1.in",
      duration: 2,
    });

    return () => {
      // Cancel the animation
      gsap.killTweensOf();
    };
  }, []);
  return (
    <section className="py-[50px] w-full bg-pr">
      <div className="container text-center ">
        <h1 className="token-h1 text-5xl md:text-6xl capitalize font-Japanese_3017"></h1>
        <h1 className="font-Audiowide text-2xl capitalize">
          100,000,000 china supply
        </h1>

        <div className="grid grid-cols-1 mt-14 lg:grid-cols-3 gap-10 justify-between items-center">
          <article className="h-[350px] bg-text rounded-lg flex justify-center items-center flex-col">
            <h2 className="text-4xl font-Audiowide text-primary">Tax: 0% </h2>
          </article>
          <article className="h-[350px] bg-text rounded-lg flex justify-center items-center flex-col">
            <h2 className="text-4xl font-Audiowide text-primary">Renounced</h2>
          </article>
          <article className="h-[350px] bg-text rounded-lg flex justify-center items-center flex-col">
            <h2 className="text-4xl font-Audiowide text-primary">and Locked</h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Token;

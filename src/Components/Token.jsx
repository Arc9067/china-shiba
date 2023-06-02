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
        <ul className="flex flex-col gap-3 list-disc list-inside text-xs font-mono max-w-[600px] mx-auto">
          <li className=" capitalize">100,000,000 chinese supply</li>
          <li className=" capitalize">
            Deflationary Mechanism: A portion of each transaction will be
            burned, reducing the total supply over time and increasing the
            scarcity of chinese tokens.
          </li>
          <li className=" capitalize">
            Liquidity Provision: A percentage of each transaction will be added
            to the liquidity pool, enhancing the stability and sustainability of
            the token.
          </li>
          <li className=" capitalize">
            Community Rewards: Holders of chinese tokens will have the
            opportunity to earn rewards through staking, participation in games,
            and other community events.
          </li>
        </ul>

        <div className="grid grid-cols-1 mt-14 lg:grid-cols-3 gap-10 justify-between items-center">
          <article className="h-[350px] bg-text rounded-lg flex justify-center items-center flex-col">
            <h2 className="text-4xl font-Audiowide text-primary">Tax: 0% </h2>
          </article>
          <article className="h-[350px] bg-text rounded-lg flex justify-center items-center flex-col">
            <h2 className="text-4xl font-Audiowide text-primary">Renounced</h2>
          </article>
          <article className="h-[350px] bg-text rounded-lg flex justify-center items-center flex-col">
            <h2 className="text-4xl font-Audiowide text-primary"> Locked</h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Token;

import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Hero = () => {
  useEffect(() => {
    gsap.timeline().to(".header", {
      text: "chinese Shiba (chinese) - The Hilariously Light-Hearted Meme Token",
      ease: "power1.in",
      duration: 2,
      repeat: 2,
      yoyo: true,
      repeatDelay: 0.4,
    });
    gsap.to(".para", {
      text: `chinese Shiba (chinese) is a humorous and light-hearted meme token that aims to bring joy and entertainment to the cryptocurrency community.`,
      ease: "power1.in",
      duration: 2,
    });
  }, []);
  return (
    <section className="pt-[150px] md:py-[100px] w-full relative">
      <div className="container grid lg:grid-cols-2 justify-between items-center">
        <div className="flex gap-10 flex-col text-center lg:text-start">
          <h1 className="text-5xl header md:text-6xl font-Japanese_3017 text-text capitalize"></h1>
          <p className="text-text para  font-mono capitalize"></p>
          <div className="flex items-center gap-3 flex-wrap justify-center lg:justify-start">
            <a
              href="https://dexscreener.com/ethereum/0xf102d137e06a03c6fe798db4b8844de5d59185f7"
              target="_blank"
              className="bg-text flex justify-center items-center gap-2 px-8 py-3 font-Audiowide capitalize font-bold hover:bg-black hover:text-text"
            >
              buy now
            </a>
            <a
              href="https://t.me/ChineseShibaEth"
              target="_blank"
              className="bg-text flex justify-center items-center gap-2 px-8 py-3 font-Audiowide capitalize font-bold hover:bg-black hover:text-text"
            >
              <FaTelegramPlane /> telegram
            </a>
          </div>
        </div>
        <img src={Logo} alt="" className="md:max-w-md w-full lg:ml-auto" />
      </div>
    </section>
  );
};

export default Hero;

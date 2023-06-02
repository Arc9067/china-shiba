import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { FaTelegramPlane } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";

const Header = () => {
  const headRef = useRef(null);

  useEffect(() => {
    const headElement = headRef.current;
    const logoElement = headElement.querySelector("img");

    gsap.set(headElement, { opacity: 0, y: -100 });
    gsap.set(logoElement, { scale: 0 });

    gsap.to(headElement, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    });
    gsap.to(logoElement, {
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.7)",
    });
  });

  return (
    <header className="py-3 w-full absolute top-0" ref={headRef}>
      <div className="container flex justify-between items-center">
        <a
          href=""
          className="font-Audiowide  text-2xl flex justify-center items-center gap-3 bg-black text-white yes px-3 uppercase"
        >
          <img
            src={logo}
            alt=""
            className="w-[3rem] object-cover bg-secondary rounded-full"
          />
          chinese shiba
        </a>

        <div className="py-4 px-7 justify-between items-center hidden md:flex gap-3 bg-black text-white">
          <a
            href="https://t.me/ChineseShibaEth"
            target="_blank"
            className="text-4xl h-[48px] w-[48px] flex items-center justify-center rounded-full bg-secondary hover:bg-primary"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://twitter.com/chineseshibaeth"
            target="_blank"
            className="text-4xl  h-[48px] w-[48px] flex items-center justify-center rounded-full bg-secondary hover:bg-primary"
          >
            <RxTwitterLogo />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

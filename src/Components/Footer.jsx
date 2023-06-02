import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-text text-primary p-4">
      <div className="container mx-auto flex items-center justify-center">
        <a href="" className="text-5xl">
          <AiOutlineTwitter />
        </a>
        <a href="" className="text-5xl">
          <TbBrandTelegram />
        </a>
      </div>
      <div className="container mx-auto text-center mt-10">
        <p className="text-sm capitalize">
          © 2023 chinese shiba. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

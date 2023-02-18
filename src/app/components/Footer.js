import React from "react";
import logo from "../images/logo.png";
import helpCircle from "../images/HelpCircle.png";
import verified from "../images/Verified.png";
import discordIcon from "../images/discordIcon.png";
import telegramIcon from "../images/telegramIcon.png";
import twitterIcon from "../images/twitterIcon.png";
import instIcon from "../images/instIcon.png";
import { FooterItem } from "../ui/FooterItem";
import { SocialLink } from "../ui/SocialLink";
export const Footer = () => {
  return (
    <div className="max-h-[95px] lg:max-h-full 2xl:px-6 px-12 bg-[#1C1C1C] items-center flex justify-between mt-auto relative z-10 lg:flex-col lg:py-2">
      <div className="flex">
        <img className="pr-12 sm:pr-2 sm:hidden" src={logo} alt="logo" />
        <FooterItem img={helpCircle} text="FAQ" />
        <FooterItem img={verified} text="Customer Support" />
      </div>
      <div className="text-center text-white sm:text-sm lg:my-3">
        Copyright ©2023 NAME, All rights reserved.
      </div>
      <div className="flex lg:mt-[25px]">
        <SocialLink img={discordIcon} link="#" />
        <SocialLink img={telegramIcon} link="#" />
        <SocialLink img={twitterIcon} link="#" />
        <SocialLink img={instIcon} link="#" />
      </div>
    </div>
  );
};

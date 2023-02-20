import React from "react";
import logo from "../images/logo.png";
import helpCircle from "../images/HelpCircle.png";
import verified from "../images/Verified.png";
import discordIcon from "../images/discordIcon.png";
import telegramIcon from "../images/telegramIcon.png";
import twitterIcon from "../images/twitterIcon.png";
import youtubeIcon from "../images/youtube.png";
import instIcon from "../images/instIcon.png";
import { FooterItem } from "../ui/FooterItem";
import { SocialLink } from "../ui/SocialLink";
export const Footer = () => {
  return (
    <div className="max-h-[95px] lg:max-h-full 2xl:px-6 px-12 bg-[#1C1C1C]  mt-auto relative z-10 lg:flex-col lg:py-2 items-center grid grid-cols-3 lg:grid-cols-1 lg:grid-rows-3">
      <div className="flex space-x-5  lg:w-full lg:justify-evenly">
        <img className=" sm:hidden  " src={logo} alt="logo" />
        <FooterItem img={helpCircle} text="FAQ" />
        <FooterItem img={verified} text="Customer Support" />
      </div>

      <div className="text-center text-white sm:text-sm xs:text-xs lg:my-3 lg:row-start-3 lg:row-end-4 lg:mt-9 xl:text-sm lg:text-base">
        Copyright ©2023 NAME, All rights reserved.
      </div>
      <div className="flex lg:mt-[25px] justify-evenly items-center">
        <SocialLink img={discordIcon} link="https://Discord.gg/mysticmotors" />
        <SocialLink
          img={youtubeIcon}
          link="https://www.youtube.com/channel/UCQ4aeTyr0bRwBAzfhp7xbNg"
        />
        <SocialLink
          img={twitterIcon}
          link="https://twitter.com/MysticMotorsNFT"
        />
        <SocialLink
          img={instIcon}
          link="https://www.instagram.com/MysticMotorsNFT/"
        />
      </div>
    </div>
  );
};

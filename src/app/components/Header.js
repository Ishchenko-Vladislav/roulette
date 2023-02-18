import React from "react";
import logo from "../images/logo.png";
import home from "../images/home.png";
import play from "../images/Play.png";
import group from "../images/Group.png";
import roadmap from "../images/roadmap.png";
import team from "../images/team.png";
import join from "../images/join.png";
import { NavItem } from "../ui/navItem";
import { Button } from "../ui/Button";
import { SwitchLanguage } from "./SwitchLanguage";
import { Burger } from "./Burger";

export const Header = () => {
  return (
    <header className="max-h-[75px] 2xl:px-6 bg-[#1C1C1C] h-full flex px-12 items-center ">
      <img className="pr-12" src={logo} alt="logo" />
      <div className="flex lg:hidden">
        <NavItem img={home} text="Home" />
        <NavItem img={play} text="Trailer" />
        <NavItem img={group} text="Group" />
        <NavItem img={roadmap} text="Roadmap" />
        <NavItem img={team} text="Team" />
        <NavItem img={join} text="Join" />
      </div>
      <SwitchLanguage />
      <Button none text={"Get Start"} />
      <Burger />
    </header>
  );
};

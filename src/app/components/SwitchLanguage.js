import React from "react";
import down from "../images/Down.png";
export const SwitchLanguage = () => {
  return (
    <div className="ml-auto flex text-white mr-10 cursor-pointer">
      <div>EN</div>
      <img className="object-contain ml-1" src={down} alt="arrow-down" />
    </div>
  );
};

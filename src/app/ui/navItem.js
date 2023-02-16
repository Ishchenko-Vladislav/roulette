import React from "react";

export const NavItem = ({ img, text }) => {
  return (
    <div className="flex cursor-pointer hover:opacity-75 pr-10 xl:pr-4">
      <img className="pr-3 object-contain" src={img} />
      <div className="text-white">{text}</div>
    </div>
  );
};

import React from "react";

export const FooterItem = ({ img, text }) => {
  return (
    <div className="flex items-center text-white pr-12 cursor-pointer hover:opacity-75 xl:pr-6">
      <img src={img} alt={img} />
      <div className="pl-2">{text}</div>
    </div>
  );
};

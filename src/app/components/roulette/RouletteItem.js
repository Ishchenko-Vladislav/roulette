import React from "react";
import style from "./roulette.module.css";

export const RouletteItem = ({ img, is, opacity }) => {
  return (
    <div
      className={`shrink-0 mx-1 md:mx-[2px] object-contain md:h-[92px] md:w-[93px] ${
        is && style.border
      } ${opacity && "opacity-70"} `}
    >
      <img className="" src={img} alt={img} />
    </div>
  );
};

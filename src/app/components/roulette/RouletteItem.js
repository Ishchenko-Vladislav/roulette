import React from "react";
import style from "./roulette.module.css";

export const RouletteItem = ({ img, is, opacity }) => {
  return (
    <div
      className={`shrink-0 ${is && style.border} ${opacity && "opacity-70"} `}
    >
      <img className="h-full w-full" src={img} />
    </div>
  );
};

import React from "react";
import style from "./roulette.module.css";

export const RouletteItem = ({ img, is, opacity }) => {
  return (
    <div
      className={`shrink-0
       mx-1
        object-contain 
        w-[70px] 
        h-[70px]  
        
        ${is && style.border} ${opacity && "opacity-70"} `}
    >
      <img className="w-full h-full object-fill" src={img} alt={img} />
    </div>
  );
};

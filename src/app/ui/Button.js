import React from "react";

export const Button = ({ text, handler, none }) => {
  return (
    <div
      onClick={handler}
      className={`
      ${none && "lg:hidden"}
      w-[195px]
       bg-[#F4F4F4]
        h-[55px]
        rounded-lg
        overflow-hidden 
        flex items-center
        justify-center
        text-[#0C0C0C]
        text-lg font-normal
        cursor-pointer
        hover:bg-opacity-75`}
    >
      {text}
    </div>
  );
};

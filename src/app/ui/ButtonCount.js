import React, { useState } from "react";

export const ButtonCount = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-around w-[195px] h-[55px] rounded-lg border-white items-center border-solid border-2 text-3xl">
      <div
        className="cursor-pointer"
        onClick={() => {
          count != 0 && setCount(count - 1);
        }}
      >
        -
      </div>
      <div>{count}</div>

      <div
        className="cursor-pointer"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </div>
    </div>
  );
};

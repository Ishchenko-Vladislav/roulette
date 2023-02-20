import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./roulette.module.css";
import info from "../../images/info.png";
import { RouletteItems } from "./RouletteItems";
import { ButtonCount } from "../../ui/ButtonCount";
import { Button } from "../../ui/Button";
import { GenerateArray } from "../../utils/GenerateArray";
export const Roulette = () => {
  const [arr, setArr] = useState([]);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const handler = () => {
    setArr(GenerateArray([...new Array(81)]));
    ref.current.style = "transition: 0s, transform: translateX(0)";
    const scroll = ref.current.scrollWidth / 2 - ref.current.clientWidth / 2;
    setTimeout(() => {
      ref.current.style = `transform: translate3d(-${scroll}px, 0, 0); transition: 5s cubic-bezier(.21,.53,.29,.99) `;
    }, 10);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  useLayoutEffect(() => {
    setArr(GenerateArray([...new Array(81)]));
    window.addEventListener("resize", () => {
      if (window.innerWidth !== width) {
        setArr(GenerateArray([...new Array(81)]));
        setWidth(window.innerWidth);
      }
    });
    // window.addEventListener("");
    console.log("change");
  }, []);

  return (
    <>
      <div className="flex mt-[25px] w-[50%] xl:w-[80%] sm:w-[90%] justify-evenly xl:justify-between space-x-4">
        <ButtonCount />
        <Button handler={handler} text={"Get Start"} />
      </div>
      <div className="flex mt-[20px] items-center">
        <img src={info} alt="info" />
        <div className="ml-2 sm:text-xs ">
          Mint price indicated in ETH (0.02 ETH)
        </div>
      </div>
      <div
        className={`
        w-[1300px]
         mb-[50px] 
         2xl:w-[1000px] 
         xl:w-[800px] 
         lx:w-screen 
         lx:rounded-none 
         lx:border-x-0
          md:w-screen 
          md:h-[92px] 
          min-h-[92px] 
          max-h-[192px]
          relative
           border-white
            border-2 rounded-xl 
            h-[192px] mt-[40px] 
            `}
      >
        <div className="absolute left-[50%] translate-x-[-50%] h-full z-10">
          <div className={`${style.top} md:translate-x-[-9px]`}></div>
          <div className="w-[6px] md:w-[2px] bg-white h-full"></div>
          <div className={`${style.bottom} md:translate-x-[-9px]`}></div>
        </div>
        <div className="w-full h-full overflow-hidden">
          <RouletteItems refs={ref} items={arr} />
        </div>
      </div>
    </>
  );
};

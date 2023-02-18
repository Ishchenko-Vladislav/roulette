import React, { useEffect, useRef, useState } from "react";
import style from "./roulette.module.css";
import car1 from "../../images/car1.png";
import car2 from "../../images/car2.png";
import car3 from "../../images/car3.png";
import car4 from "../../images/car4.png";
import car5 from "../../images/car5.png";
import car6 from "../../images/car6.png";
import car7 from "../../images/car7.png";
import info from "../../images/info.png";
import { RouletteItems } from "./RouletteItems";
import { ButtonCount } from "../../ui/ButtonCount";
import { Button } from "../../ui/Button";
import { GenerateArray } from "../../utils/GenerateArray";
export const Roulette = () => {
  const [arr, setArr] = useState([]);
  const items = [car1, car2, car3, car4, car5, car6, car7];
  const ref = useRef(null);
  const handler = () => {
    setArr(GenerateArray([...new Array(81)], items));
    ref.current.style = "transition: 0s, transform: translateX(0)";
    const scroll = ref.current.scrollWidth / 2 - ref.current.clientWidth / 2;
    setTimeout(() => {
      ref.current.style = `transform: translate3d(-${scroll}px, 0, 0); transition: 5s cubic-bezier(.21,.53,.29,.99) `;
    }, 10);
  };

  useEffect(() => {
    setArr(GenerateArray([...new Array(81)], items));
  }, []);

  return (
    <>
      <div className="flex mt-[25px] w-[50%] xl:w-[80%] sm:w-[90%] justify-evenly xl:justify-between">
        <ButtonCount />
        <Button handler={handler} text={"Get Start"} />
      </div>
      <div className="flex mt-[20px]">
        <img src={info} alt="info" />
        <div className="ml-2">Mint price indicated in ETH (0.02 ETH)</div>
      </div>
      <div
        className={`w-[1300px] mb-[50px] 2xl:w-[1000px] xl:w-[800px] lx:w-screen lx:rounded-none lx:border-x-0 md:w-screen md:h-[92px] min-h-[92px] max-h-[150px] relative border-white border-2 rounded-xl h-[200px] mt-[40px] overflow-hidden ${style.transition}`}
      >
        <div className="absolute left-[50%] translate-x-[-50%] h-full z-10">
          <div className={style.top}></div>
          <div className="w-[5px] bg-white h-full"></div>
          <div className={style.bottom}></div>
        </div>
        <RouletteItems refs={ref} items={arr} />
      </div>
    </>
  );
};

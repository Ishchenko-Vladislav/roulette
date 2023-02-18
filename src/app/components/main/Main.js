import React from "react";
import { Roulette } from "../roulette/Roulette";
import style from "./Main.module.css";
export const Main = () => {
  return (
    <main className={`flex h-full flex-1 bg-black ${style.bg} relative`}>
      <div className="mt-[20px] flex flex-col justify-center items-center mx-auto text-white relative z-10 text-center sm:w-[95%]">
        <div className="text-base">Countdown</div>
        <div className="text-4xl mb-[45px]">122 : 45 : 12 : 12</div>
        <div className="text-5xl mb-[30px] sm:text-3xl">
          Spin to Win with NFTs
        </div>
        <div className="text-base">
          Discover the Thrill of Collecting Unique Digital Assets through Fun
          and Rewarding Spins.
        </div>
        <div className="flex text-white text-xl mt-[35px] justify-center">
          <div className="">350</div>
          <div className=" opacity-50">/500 NFT</div>
        </div>
        <div className="w-[500px] sm:w-[80%] h-[5px] bg-black relative mt-[15px]">
          <div className="h-[5px] bg-blue-500 w-[75%] absolute z-10"></div>
        </div>

        <Roulette />
      </div>
    </main>
  );
};

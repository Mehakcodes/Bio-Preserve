import React from "react";
import { GiTwoCoins } from "react-icons/gi";

const StoreCard = ({ imageSrc, title, coins }) => {
  return (
    <div className="w-[20rem] h-[18rem] bg-white rounded-md flex flex-col gap-3 px-3 py-3">
      <div className="bg-zinc-500 rounded-md h-[80%]">
        <img src={imageSrc} className="w-full h-full overflow-hidden" alt={title} />
      </div>
      <div className="flex justify-between">
        <div className="text-black font-bold">{title}</div>
        <div className="w-20 cursor-pointer h-12 rounded-md bg-orange-400 flex justify-around items-center">
          <div className="text-white font-bold text-lg">{coins}</div>
          <div className="text-yellow-300" style={{ fontSize: '1.5em' }}>
            <GiTwoCoins />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;

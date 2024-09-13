import React from "react";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card() {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative w-1/3 h-72 bg-zinc-500 rounded-md flex overflow-hidden">
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }  w-full h-full object-cover`}
          src="https://plus.unsplash.com/premium_photo-1722038404409-718599ce7246?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }  w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1475189778702-5ec9941484ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
        <span
          onClick={() => setVal(() => !val)}
          className={`${
            val === true ? "-rotate-180" : "rotate-0"
          } transition-transform duration-700 ease-in-out cursor-pointer w-8 h-8 flex items-center justify-center bg-[#dadada8b] rounded-full  bg-zinc-200 absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]`}
        >
          <FaArrowRightLong size={".7em"} />
        </span>
      </div>
    </div>
  );
}

export default Card;

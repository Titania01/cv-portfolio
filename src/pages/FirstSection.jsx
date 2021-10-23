import React, { useState } from "react";
import Picture from "../components/Picture";
import "./FirstSection.css";

const FirstSection = () => {
  const [activateDarkMode, setactivateDarkMode] = useState(false);
  return (
    <div className="dark:bg-[#1F2937E5] dark:bg-none  begee1">
      <div className="pr-[13.5rem] pl-[13.5rem] flex items-center justify-between">
        <div>
          <div className="flex items-center pt-[11.1875rem]">
            <h2 className="font-bold text-[3rem] text-[#1f2937] dark:text-white">
              Hi
            </h2>
            <div className={``} onClick={() => {}}>
              <img src="/image/hand.svg" alt="" />
            </div>
          </div>
          <h2 className="font-bold text-[3rem] text-[#1f2937] dark:text-white">
            I’m Kemi Anikulapo
          </h2>
          <p className="text-[1.25rem] dark:text-white">
            Passionate di bidang Frontend Dev dan UI/UX Design. <br /> Suka
            membangun antarmuka website yang fast- <br /> performace dan
            well-design menggunakan teknologi- <br /> teknologi terbaru.
          </p>
          <div className="flex items-center pt-5">
            <div className="mr-10 deep-blue dark:bg-white">
              <p className="mr-4 dark:text-[#1f2937]">Let’s work together</p>
              <img src="/image/arr-right.svg" alt="" />
            </div>
            <div className="white">
              <p className="mr-4">See some of my works</p>
              <img src="/image/arr-down.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-56 pics">
          <Picture />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

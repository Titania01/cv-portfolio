import React from "react";
import Card from "../components/Card";
import "./ThirdSection.css";

const ThirdSection = () => {
  return (
    <div className="pl-[12.9375rem] pt-[12.9375rem] pr-[6.4375rem] begee3 dark:bg-[#1F2937E5] dark:bg-none">
      <div className="text-lg font-normal">
        <p className="text-[#1f2937] dark:text-white">FEATURED PROJECTS</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="font-bold text-[2.5rem] dark:text-white text-[#1f2937] pr-8">
              Stuff I've Worked On
            </h2>
            <img src="/image/file.png" alt="" />
          </div>
          <div className="flex items-center pr-[13.75rem]">
            <div className="mr-6 arrow">
              <img src="/image/left-arr.svg" alt="" />
            </div>
            <div className="arrow">
              <img src="/image/right-arr.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ThirdSection;

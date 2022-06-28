import React, { useState } from "react";
// import "./Navbar.css";

const Navbar = () => {
  const [activateDarkMode, setactivateDarkMode] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-center pt-[1rem] pl-[13.5rem] Nav">
        <p className="text-[#1f2937] dark:text-gray-200 font-bold flex-grow">
          KEMI ANIKULAPO
        </p>
        <div className="flex items-center pr-[13.5rem] ">
          <div className="flex ">
            <div className="pl-10">About</div>
            <div className="pl-10">Work</div>
            <div className="pl-10">Contact</div>
          </div>
          <div
            className={`pl-10 ${activateDarkMode ? "dark" : ""}`}
            onClick={() => setactivateDarkMode(!activateDarkMode)}
          >
            <img src="/image/sun.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(`light`);

  return (
    <div id="theme-wrapper" className={`${theme}`}>
      <div className="flex items-center justify-center pt-[1rem] pl-[13.5rem] Nav dark:bg-[#1F2937E5] dark:text-white ">
        <p className="text-[#1f2937] dark:text-white font-bold flex-grow">
          KEMI ANIKULAPO
        </p>
        <div className="flex items-center pr-[13.5rem] ">
          <div className="flex ">
            <div className="pl-10">About</div>
            <div className="pl-10">Work</div>
            <div className="pl-10">Contact</div>
          </div>
          <div
            className={`pl-10 `}
            onClick={() => {
              theme == `light` ? setTheme(`dark`) : setTheme(`light`);
            }}
          >
            <img
              src={`/image/${theme == `light` ? "sun" : "white-sun"}.svg`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div> {children}</div>
    </div>
  );
}

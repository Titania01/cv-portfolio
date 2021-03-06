import React from "react";

const Card = ({ projectName }) => {
  return (
    <div style={{ marginRight: "3rem" }}>
      <div className="bg-white card dark:bg-[#1F2937]">
        <div className="flex items-center justify-center small-card">
          <img src="/image/garden.png" alt="" />
        </div>

        <div className="pl-[2rem] pt-[2rem] ">
          <h2 className="text-2xl font-semibold dark:text-white">
            {projectName}
          </h2>
          <p className="pt-4 text-base font-normal colour dark:text-white">
            Fill your project brief here. It can be the outcome of the <br />
            project, or some success metrics, or a cheesy tagline.
          </p>
        </div>
        <div className="flex text-xs font-normal pb-4 pt-[1.375rem] pl-[2rem]">
          <span className="flex items-center justify-center">
            <p>Mobile App</p>
          </span>
          <span className="flex items-center justify-center ml-4">
            <p>Website</p>
          </span>
          <span className="flex items-center justify-center ml-4">
            <p>Sass</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

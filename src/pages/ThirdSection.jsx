import React, { useState, Fragment } from "react";
import Card from "../components/Card";
import "./ThirdSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ThirdSection = () => {
  const [carouselEL, setCarouselEL] = useState({});
  const projectNames = "Testify,Weater Forecast,Zonely,Fruitfy,Lasana".split(
    ","
  );

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const handleCarouselClick = (el) => {
    setCarouselEL(el);
  };
  return (
    <div className="pl-[12.9375rem] pt-[12.9375rem] pr-[6.4375rem] begee3 dark:bg-[#1F2937E5] dark:bg-none ">
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
            <div className="mr-6 arrow" onClick={() => carouselEL.previous()}>
              <img src="/image/left-arr.svg" alt="" />
            </div>
            <div className="arrow" onClick={() => carouselEL.next()}>
              <img src="/image/right-arr.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-16  h-[35rem]">
        <Carousel
          ref={handleCarouselClick}
          swipeable={false}
          draggable={false}
          responsive={responsive}
          customTransition="all .5"
          transitionDuration={500}
          itemClass="margin-right"
          showDots={false}
          arrows={false}
          // slidesToSlide={2}
        >
          {projectNames.map((item, itemIndex) => (
            <Fragment key={`project-index-${itemIndex}`}>
              <Card projectName={item} />
            </Fragment>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ThirdSection;

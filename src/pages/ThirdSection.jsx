import React from "react";
import Card from "../components/Card";
import "./ThirdSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ThirdSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
            <div className="mr-6 arrow">
              <img src="/image/left-arr.svg" alt="" />
            </div>
            <div className="arrow">
              <img src="/image/right-arr.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-28  h-[35rem]">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="margin-right"
          showDots={false}
          arrows={false}
          slidesToSlide={2}
        >
          <>
            1
            <Card />
          </>
          <>
            2
            <Card />
          </>
          <Card />
          <Card />
          <Card />
        </Carousel>
      </div>
    </div>
  );
};

export default ThirdSection;

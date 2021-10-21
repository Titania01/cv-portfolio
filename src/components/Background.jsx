import * as React from "react";

function Background(props) {
  return (
    <svg
      width={1440}
      height={762}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_b_146:1707)">
        <path fill="#F9FAFB" fillOpacity={0.8} d="M0 0h1440v762H0z" />
      </g>
      <defs>
        <filter
          id="prefix__filter0_b_146:1707"
          x={-100}
          y={-100}
          width={1640}
          height={962}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={50} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_146:1707"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_146:1707"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Background;

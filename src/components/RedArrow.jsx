import * as React from "react";

function RedArrow(props) {
  return (
    <svg
      width={14}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.004 3.414l-8.607 8.607-1.414-1.414L9.589 2H2.004V0h11v11h-2V3.414z"
        fill="url(#prefix__paint0_linear_136:1448)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_136:1448"
          x1={0.983}
          y1={0}
          x2={6.26}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8B5CF6" />
          <stop offset={1} stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default RedArrow;

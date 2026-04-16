import React from "react";
import { useNavigate } from "react-router-dom";

const Work = ({ imgSrc, webName, webDesc }) => {
  let nav = useNavigate();
  return (
    <>
      <div className="mt-1 w-full max-w-[42rem] overflow-hidden lg:mt-20">
        <img
          src={imgSrc}
          onClick={() => nav(`/webInfo/${webName}`)}
          className="aspect-[4/3] w-full rounded-[22px] border-[6px] border-white object-cover p-[2px] shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:rotate-2"
        />

        <h1 className="mt-3 text-center text-2xl font-semibold text-black lg:text-4xl">
          {webName}
        </h1>
        <p className="mt-1 text-center text-base text-gray-500 lg:text-[20px]">
          {webDesc}
        </p>
      </div>
    </>
  );
};

export default Work;

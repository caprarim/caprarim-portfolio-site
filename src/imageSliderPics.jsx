import React from "react";
import { useNavigate } from "react-router-dom";

const ImageSlider = ({ imgSrc, webName, compactMobile = false }) => {
  let nav = useNavigate();
  return (
    <>
      <img
        src={imgSrc}
        onClick={() => nav(`/webInfo/${webName}`)}
        alt=""
        className={`aspect-[4/3] cursor-pointer rounded-[22px] border-[5px] border-white object-cover p-[2px] shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:rotate-2 ${compactMobile ? "w-[72vw] max-w-[15rem] lg:w-full lg:max-w-[32rem]" : "w-full max-w-[32rem]"}`}
      />
    </>
  );
};

export default ImageSlider;

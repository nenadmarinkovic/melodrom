import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Wrap } from "../styles/Slider";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        fill="white"
        viewBox="0 0 476.213 476.213"
        style={{ enableBackground: "new 0 0 476.213 476.213" }}
      >
        <polygon
          points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
345.606,368.713 476.213,238.106 "
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 477 477"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        style={{ enableBackground: "new 0 0 476.213 476.213" }}
      >
        <g clipPath="url(#clip0)">
          <path
            d="M130.607 107.5L151.819 128.713L57.426 223.107H476.213V253.107H57.426L151.819 347.5L130.607 368.713L0 238.106L130.607 107.5Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="476.213"
              height="476.213"
              fill="white"
              transform="matrix(-1 0 0 1 476.213 0)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function SimpleSlider() {
  var settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Wrap>
      <Slider {...settings}>
        <div>
          <Image src="/0001.jpg" width={470} height={420} />
        </div>
        <div>
          <Image src="/0002.jpg" width={470} height={420} />
        </div>
        <div>
          <Image src="/0003.jpg" width={470} height={420} />
        </div>
        <div>
          <Image src="/0004.jpg" width={470} height={420} />
        </div>
       
       

      
      </Slider>
    </Wrap>
  );
}

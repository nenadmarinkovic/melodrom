import React from "react";
import { Wrap } from "../styles/Offer";
import { ReasonTitle } from "../styles/Reasons";
import SliderMusic from "../components/SliderMusic";

function Offer() {
  return (
    <Wrap>
      <div className="container-slider-music">
      <ReasonTitle>Програм</ReasonTitle>
        <SliderMusic />
      </div>
    </Wrap>
  );
}

export default Offer;

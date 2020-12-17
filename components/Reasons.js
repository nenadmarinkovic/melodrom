import React from "react";
import Slider from "../components/Slider";
import SliderText from "../components/SliderText";
import {
  BannerRight,
  BannerWrap,
  BannerLeft,
  MainText,
  ReasonTitle,
} from "../styles/Reasons";

function Reasons() {
  return (
    <BannerWrap>
      <BannerLeft>
        <ReasonTitle>Мелодром</ReasonTitle>
        <MainText>
          Дејана Банковић је педагог, наставница клавира и солфеђа, заљубљеница
          у музику која преко Мелодрома жели да приближи музику свима, а посебно
          најмлађима.
        </MainText>
        <Slider />
      </BannerLeft>
      <BannerRight>
        <ReasonTitle>Музика</ReasonTitle>

        <SliderText />
      </BannerRight>
    </BannerWrap>
  );
}

export default Reasons;

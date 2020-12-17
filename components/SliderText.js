import React from "react";
import Slider from "react-slick";
import { Wrap, Text, CenteredText, SubText, SVG } from "../styles/SliderText";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ display: "none" }}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ display: "none" }}
    ></div>
  );
}

export default function SimpleSlider() {
  var settings = {
    fade: true,
    autoplay: true,
    infinite: true,
    dots: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Wrap>
      <Slider {...settings}>
        <div>
          <CenteredText>
            <Text>
              <SVG
                id="Capa_1"
                enable-background="new 0 0 409.294 409.294"
                height="512"
                viewBox="0 0 409.294 409.294"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z" />
                <path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z" />
              </SVG>
              <div>
                Музика приказује оно што се речима не може исказати, а у вези
                чега је немогуће ћутати.
              </div>
            </Text>
            <SubText>⏤ Виктор Иго, француски филозоф</SubText>
          </CenteredText>
        </div>
        <div>
          <CenteredText>
            <Text>
              <SVG
                id="Capa_1"
                enable-background="new 0 0 409.294 409.294"
                height="512"
                viewBox="0 0 409.294 409.294"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z" />
                <path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z" />
              </SVG>
              <div>
              Тамо где речи закажу, музика говори.
              </div>
            </Text>
            <SubText>⏤ Ханс Кристијан Андерсон, писац</SubText>
          </CenteredText>
        </div>
        <div>
          <CenteredText>
            <Text>
              <SVG
                id="Capa_1"
                enable-background="new 0 0 409.294 409.294"
                height="512"
                viewBox="0 0 409.294 409.294"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z" />
                <path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z" />
              </SVG>
              <div>Музика даје душу универзуму, крила уму, лет до маште, и живот свему.</div>
            </Text>
            <SubText>⏤ Платон, старогрчки филозоф</SubText>
          </CenteredText>
        </div>
        <div>
          <CenteredText>
            <Text>
              <SVG
                id="Capa_1"
                enable-background="new 0 0 409.294 409.294"
                height="512"
                viewBox="0 0 409.294 409.294"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z" />
                <path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z" />
              </SVG>
              <div>Без музике, живот би ми био празнина.</div>
            </Text>
            <SubText>⏤ Џејн Остин, енглеска књижевница</SubText>
          </CenteredText>
        </div>
      </Slider>
    </Wrap>
  );
}

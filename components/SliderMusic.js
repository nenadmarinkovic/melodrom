import React from "react";
import Slider from "react-slick";
import { Wrap, Text, CenteredText, SubText, SVG } from "../styles/SliderMusic";

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
                Учење свирања клавира помаже у развоју координације,
                концентрације и памћења.
              </div>
            </Text>
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
              Учење свирања клавира помаже у развоју истрајности и одлучности.
            </Text>
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
              <div>Учење свирања клавира помаже у стицању самопоуздањa.</div>
            </Text>
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
                Учење свирања клавира помаже у развоју социјалe и емоционалне
                интелигенције.
              </div>
            </Text>
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
                Учење свирања клавира помаже развоју психомоторних вештина у
                музичком контексту.
              </div>
            </Text>
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
                Учење свирања клавира помаже развој брзог мишљења, мишљења
                “унапред” и апстрактног мишљења.
              </div>
            </Text>
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
                Доказано је да укључивањем деце у музичке активности се
                побољшавају и вербалне способности. <br></br>
                <br></br>
              </div>
            </Text>
          </CenteredText>
        </div>
      </Slider>
    </Wrap>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BannerWrap,
  BannerRight,
  BannerLeft,
  Logo,
  LogoText,
  HeaderItems,
  HeaderItem,
  MainText,
  SubText,
  Arrow,
  FlexArrow,
  ArrowText,
  Piano,
  BannerText,
} from "../styles/Banner";
import ScrollIntoView from "react-scroll-into-view";

import App from "../components/Dynamic";

function Banner() {
  return (
    <BannerWrap>
      <BannerLeft>
        <Logo>
          <Image src="/piano.svg" width={30} height={30} />

          <LogoText>
            <Link href="/">Мелодром</Link>
          </LogoText>
        </Logo>
        <BannerText>
          <MainText>Добродошли у Мелодром</MainText>
          <SubText>
            Мелодром је јединствена школа солфеђа и клавира. На музичку
            радионицу Мелодром слећу фантастични звукови чак и из најудаљенијих
            делова света. Само да би били доступни свима у Мелодрому.
          </SubText>
          <FlexArrow>
            <ScrollIntoView selector="#about" smooth={true}>
              <ArrowText>Cазнај више</ArrowText>
            </ScrollIntoView>

            <Arrow
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
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
            </Arrow>
          </FlexArrow>
        </BannerText>
      </BannerLeft>
      <BannerRight>
        <HeaderItems>
          <ScrollIntoView selector="#about" smooth={true}>
            <HeaderItem>Више о школи</HeaderItem>
          </ScrollIntoView>

          <ScrollIntoView selector="#location" smooth={true}>
            <HeaderItem>Локација и слободни термини</HeaderItem>
          </ScrollIntoView>

          <ScrollIntoView selector="#contact" smooth={true}>
            <HeaderItem>Контакт</HeaderItem>
          </ScrollIntoView>
        </HeaderItems>
        <Piano>
          <App />
        </Piano>
      </BannerRight>
    </BannerWrap>
  );
}

export default Banner;

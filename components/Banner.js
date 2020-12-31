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
  MenuDiv,
} from "../styles/Banner";
import ScrollIntoView from "react-scroll-into-view";

import App from "../components/Dynamic";
import Menu from "./Menu";

function Banner() {
  return (
    <BannerWrap>
      <BannerLeft>
        <Logo>
          <MenuDiv>
            <Menu />
          </MenuDiv>

          <Image src="/piano.svg" width={30} height={30} />

          <LogoText>
            <Link href="/">Мелодром</Link>
          </LogoText>
        </Logo>

        <BannerText>
          <MainText>Добродошли у Мелодром</MainText>
          <SubText>
            Мелодром је музичка радионица клавира, солфеђа, као и рада са
            певачким друштвима и хоровима.
          </SubText>
          <FlexArrow>
            <ScrollIntoView selector="#about" smooth={true}>
              <ArrowText>Cазнајте више</ArrowText>
            </ScrollIntoView>
            <ScrollIntoView selector="#about" smooth={true}>
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
            </ScrollIntoView>
          </FlexArrow>
        </BannerText>
      </BannerLeft>
      <BannerRight>
        <HeaderItems>
          <ScrollIntoView selector="#about" smooth={true}>
            <HeaderItem>О радионици</HeaderItem>
          </ScrollIntoView>

          <ScrollIntoView selector="#program" smooth={true}>
            <HeaderItem>Програм и локација</HeaderItem>
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

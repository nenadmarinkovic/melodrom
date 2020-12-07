import styled from "styled-components";

export const BannerWrap = styled.div`
  display: flex;
  height: 800px;
`;

export const Text = styled.div``;

export const BannerLeft = styled.div`
  width: 50%;
  z-index: 1;
  position: relative;
  padding: 60px 80px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BannerRight = styled.div`
  width: 50%;
  background: #d7e3e5;
  z-index: 1;
  position: relative;
  padding: 60px 80px 80px;
  display: flex;
  flex-direction: column;
`;

export const Piano = styled.div`
  padding-top: 210px;
`;

export const BannerText = styled.div``;

export const Logo = styled.div`
  font-size: 21px;
  display: flex;
  align-items: center;
`;

export const LogoText = styled.div`
  font-size: 20px;
  margin-left: 10px;
  font-style: italic;
`;

export const MainText = styled.div`
  font-size: 48px;
`;

export const SubText = styled.div`
  font-size: 17px;
  line-height: 1.5;
  margin-top: 20px;
`;

export const LogoImage = styled.svg`
  width: 30px;
  height: 30px;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderItem = styled.div`
  margin-left: 40px;
  font-size: 16px;
`;

export const Arrow = styled.svg`
  width: 35px;
  height: 25px;
`;

export const FlexArrow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const ArrowText = styled.p`
  font-family: "Gotham";
  font-size: 15px;
`;

import styled from "styled-components";

export const BannerWrap = styled.div`
  display: flex;
`;

export const Text = styled.div``;

export const BannerLeft = styled.div`
  width: 50%;
  z-index: 1;
  position: relative;
  padding: 60px 80px 180px;
`;

export const BannerRight = styled.div`
  width: 50%;
  background: #7a909d;
  color: white;
  z-index: 1;
  position: relative;
  padding: 60px 80px 180px;
  display: flex;
  flex-direction: column;
`;

export const Piano = styled.div`
  padding-top: 210px;
`;

export const BannerText = styled.div`
  padding-top: 210px;
`;

export const Logo = styled.div`
  font-size: 21px;
  display: flex;
  align-items: center;
`;

export const LogoText = styled.div`
  font-size: 21px;
  margin-left: 10px;
  font-family: "Gotham";
  border-bottom: 1px solid transparent;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    border-bottom: 1px solid black;
  }
`;

export const MainText = styled.div`
  font-size: 48px;
  font-family: "Gotham";
  line-height: 1.3;
`;

export const SubText = styled.div`
  font-size: 16px;
  line-height: 1.8;
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
  font-family: "Gotham";
  border-bottom: 1px solid transparent;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    border-bottom: 1px solid white;
  }
`;

export const Arrow = styled.svg`
  width: 35px;
  height: 25px;
  margin-left: 5px;
  margin-top: 3px;
  :hover {
    cursor: pointer;
  }
`;

export const FlexArrow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const ArrowText = styled.p`
  font-family: "Gotham";
  font-size: 15px;
  :hover {
    cursor: pointer;
  }
`;

export const PianoText = styled.div`
  text-align: end;
  margin-top: 20px;
  font-size: 14px;
`;

import styled from "styled-components";

export const BannerWrap = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const SVG = styled.svg`
  width: 30px;
  height: 30px;
`;

export const More = styled.div`
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
`;

export const BannerLeft = styled.div`
  width: 50%;
  z-index: 1;
  position: relative;
  padding: 30px 80px 80px;
  background: #7a909d;
  color: white;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 520px) {
    padding: 20px 40px 80px;
  }
`;

export const BannerRight = styled.div`
  width: 50%;
  z-index: 1;
  position: relative;
  padding: 30px 80px 80px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 520px) {
    padding: 20px 40px 80px;
  }
`;

export const ReasonTitle = styled.div`
  font-family: "Gotham", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.8;
  text-align: center;
  line-height: 1.5;
  padding-top: 60px;
`;

export const MainText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 40px;
  align-text: center;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 18px;
  text-align: center;

  @media (max-width: 520px) {
    padding: 0;
  }
`;

export const MainTextLeft = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 40px;
  text-align: center;
`;

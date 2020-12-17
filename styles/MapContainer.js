import styled from "styled-components";

export const BannerWrap = styled.div`
  display: flex;
`;

export const BannerLeft = styled.div`
  width: 50%;
  z-index: 1;
  position: relative;
  padding: 30px 80px 80px;
`;

export const BannerRight = styled.div`
  width: 50%;
  z-index: 1;
  position: relative;
  padding: 30px 80px 80px;
  display: flex;
  flex-direction: column;
  background: #677d8c;
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
padding-top: 50px;
`;

export const MainText = styled.div`
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  margin-top: 30px;
  color: white;
  padding: 18px;
  text-align: center;
`;

export const TerminText = styled.div`
  font-size: 18px;
  line-height: 1.5;
  margin-top: 30px;

  display: flex;
  align-items: center;
`;

export const ReasonTitleWhite = styled.div`
font-family: "Gotham", serif;
letter-spacing: 1px;
text-transform: uppercase;
font-weight: normal;
font-size: 14px;
line-height: 1.8;
text-align: center;
line-height: 1.5;
padding-top: 50px;
color: white;
`;

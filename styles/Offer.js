import styled from "styled-components";

export const Wrap = styled.div`
  background: #eff0ec;
`;

export const Text = styled.div`
  padding-top: 60px;
  font-size: 18px;
  text-align: center;
  line-height: 1.8;
  display: flex;
  padding-bottom: 80px;

  @media (max-width: 700px) {
    padding-top: 20px;
    text-align: start;
  }

  @media (max-width: 520px) {
    padding-bottom: 20px;
  }
`;

export const CenteredText = styled.div`
  width: 680px;
  max-width: 100%;
  margin: 0px auto;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const SVG = styled.svg`
  width: 30%;
  height: 30px;
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 5px;
  font-size: 18px;

  @media (max-width: 1100px) {
    padding: 30px;
    margin-top: 0;
  }

  @media (max-width: 700px) {
    padding: 10px;
    align-items: start;
  
  }
`;

export const FlexText = styled.div`
  margin-left: 30px;
  font-size: 15px;

  @media (max-width: 700px) {
    margin-left: 0;
    align-items: start;
  }
`;

export const FlexSVG = styled.div`
  margin-top: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`;

import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 280px;
  padding-bottom: 30px;
  line-height: 1.7;
  font-size: 21px;
  text-align: center;

  @media (max-width: 1100px) {
    margin-top: 80px;
  }
`;

export const Text = styled.div`
  font-size: 21px;
  text-align: center;
  line-height: 1.5;
  display: flex;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

export const CenteredText = styled.div``;

export const SubText = styled.div`
  font-size: 16px;
  font-size: 21;
  text-align: center;
  line-height: 1.5;
  padding-top: 30px;
`;

export const SVG = styled.svg`
  width: 15%;
  height: 20px;
`;

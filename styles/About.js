import styled from "styled-components";

export const Wrap = styled.div`
  background: #eff0ec;
  height: 520px;
`;

export const Text = styled.div`
  padding-top: 100px;
  font-size: 26px;
  text-align: center;
  line-height: 1.5;
  display: flex;

  @media (max-width: 1100px) {
    padding: 100px 30px 0 30px;
    font-size: 21px;
  }
`;

export const CenteredText = styled.div`
  width: 800px;
  max-width: 100%;
  margin: 0px auto;
`;

export const SubText = styled.div`
  font-size: 16px;
  font-size: 21;
  text-align: center;
  line-height: 1.5;
  padding-top: 30px;
`;

export const SVG = styled.svg`
  width: 30%;
  height: 30px;
`;

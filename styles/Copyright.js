import styled from "styled-components";

export const Wrap = styled.div`
  color: white;
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 10px;
  text-align: center;

  @media (max-width: 1045px) {
    padding-top: 75px;
  }

  @media (max-width: 580px) {
    line-height: 1.8;
  }
`;

export const Created = styled.div`
  color: white;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 15px;
`;

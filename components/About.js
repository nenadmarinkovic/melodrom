import React from "react";
import { Wrap, Text, CenteredText, SubText, SVG } from "../styles/About";
import { ReasonTitle } from "../styles/Reasons";

function About() {
  return (
    <Wrap>
      <CenteredText>
        <ReasonTitle id="about">О радионици</ReasonTitle>
        <Text>
          <SVG
            id="Capa_1"
            enable-background="new 0 0 409.294 409.294"
            height="512"
            viewBox="0 0 409.294 409.294"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z" />
            <path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z" />
          </SVG>
          <div>
            Meлодрам је настао из потребе да кроз музичкe радионице, које су
            доступне како младима, тако и свим заљубљеницима у музику, приближи
            ову уметност која има многоструко дејство на човека.
          </div>
        </Text>
        <SubText>⏤ Дејана Банковић, музички педагог</SubText>
      </CenteredText>
    </Wrap>
  );
}

export default About;

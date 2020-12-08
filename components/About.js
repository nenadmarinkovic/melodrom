import React from "react";
import { Wrap, Text, CenteredText, SubText } from "../styles/About";

function About() {
  return (
    <Wrap>
      <CenteredText>
        <Text>
          Мелодром је настао из потребе за школом клавира која је доступна
          најмлађима и која има за циљ да младе приближи музици, а самим тим
          пробуди њихов таленат и потенцијал у годинама које долазе.
        </Text>
        <SubText>- Дејана Банковић, музички педагог</SubText>
      </CenteredText>
    </Wrap>
  );
}

export default About;

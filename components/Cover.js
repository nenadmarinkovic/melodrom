import React from "react";
import Image from "next/image";
import { Wrap, Text } from "../styles/Cover";

function About() {
  return (
    <Wrap>
      <Image
        src="/piano-5.jpg"
        width={400}
        height={150}
        layout={"responsive"}
        className="cover-image"
      />
      <Text>
        Постоји много верзија и варијација Lorem Ipsum пасуса, али већина је
        претрпела некакву промену, било да је то додавање неког хумора или
        насумична респодела речи која на крају не изгледа уверљиво.
      </Text>
    </Wrap>
  );
}

export default About;

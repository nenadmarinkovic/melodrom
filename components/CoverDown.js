import React from "react";
import Image from "next/image";
import { Wrap } from "../styles/Cover";

function About() {
  return (
    <Wrap>
      <Image
        src="/cover-down-min.jpg"
        width={650}
        height={230}
        layout={"responsive"}
        className="cover-image"
      />
    </Wrap>
  );
}

export default About;

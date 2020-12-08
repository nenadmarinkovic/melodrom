import React from "react";
import Image from "next/image";
import { Wrap } from "../styles/Cover";

function About() {
  return (
    <Wrap>
      <Image
        src="/piano-5.jpg"
        width={350}
        height={120}
        layout={"responsive"}
        className="cover-image"
      />
   
    </Wrap>
  );
}

export default About;

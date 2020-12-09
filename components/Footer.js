import React from "react";
import Form from "../components/Form";
import Copyright from "../components/Copyright";
import { Wrap } from "../styles/Footer";

function Footer() {
  return (
    <Wrap>
      <div className="container">
        <Form />
        <Copyright />
      </div>
    </Wrap>
  );
}

export default Footer;

import React from "react";
import Form from "../components/Form";
import Copyright from "../components/Copyright";
import { Wrap } from "../styles/Footer";
import { ReasonTitle } from "../styles/Reasons";

function Footer() {
  return (
    <Wrap>
       <ReasonTitle style={{color: "white"}} id="contact">Контакт</ReasonTitle>
      <div className="container">
        <Form />
        <Copyright />
      </div>
    </Wrap>
  );
}

export default Footer;

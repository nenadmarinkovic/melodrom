import React, { useState } from "react";
import axios from "axios";
import {
  MainForm,
  FormContainer,
  FormLabel,
  FormInput,
  FlexItem,
  Button,
  TextArea,
  Error,
  Message,
  FormText
} from "../styles/Form";

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    Name: "",
    Email: "",
    Linkedin: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });

      setInputs({
        Name: "",
        Email: "",
        Linkedin: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();

    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xpzoyzwj",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <>
      <div className="container-form">
        <FormText>
          Спремни сте да закорачите у чудесан свет музике?
          <br></br>
          Контактирајте Мелодром на број телефона 060 1234567, или уз помоћ
          форме.
        </FormText>
      </div>

      <div className="container-form">
        <MainForm>
          <FormContainer onSubmit={handleOnSubmit}>
            <FlexItem>
              <FormLabel htmlFor="name">Ваше име:</FormLabel>
              <FormInput
                id="Name"
                type="Name"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.Name}
              />
            </FlexItem>
            <FlexItem>
              <FormLabel htmlFor="Email">Ваша е-мејл адреса:</FormLabel>
              <FormInput
                id="Email"
                type="Email"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.Email}
              />
            </FlexItem>

            <FlexItem>
              <FormLabel htmlFor="Email">Ваша број телефона:</FormLabel>
              <FormInput
                id="Email"
                type="Email"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.Email}
              />
            </FlexItem>
            <FlexItem>
              <FormLabel htmlFor="message">Ваша порука или питање:</FormLabel>
              <TextArea
                id="message"
                name="message"
                onChange={handleOnChange}
                required
                value={inputs.message}
              />
            </FlexItem>

            <Button type="submit" disabled={status.submitting}>
              {!status.submitting
                ? !status.submitted
                  ? "Submit"
                  : "Submitted"
                : "Submitting..."}
            </Button>
          </FormContainer>
          {status.info.error && <Error>Error: {status.info.msg}</Error>}
          {!status.info.error && status.info.msg && (
            <Message>{status.info.msg}</Message>
          )}
        </MainForm>
      </div>
    </>
  );
}

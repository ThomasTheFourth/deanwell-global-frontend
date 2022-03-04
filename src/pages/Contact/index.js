import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  PageTitle,
  EmailTextField,
  MessageTextField,
  EmailAlert,
  EmailForm,
  SubmitButton,
  SecondaryTitle,
  Paragraph,
} from "./styles";
import { AlertTitle } from "@mui/material";

export const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    setFormSubmitted(true);
    const formValid = form.current.reportValidity();
    if (formValid) {
      emailjs
        .sendForm(
          "service_6mrwxho",
          "template_87ru9na",
          form.current,
          "CgUdhftvLX9QAPtv9"
        )
        .then(() => {
          setEmailSent(true);
          form.current.reset();
          setFormSubmitted(false);
        });
    } else {
      setFormSubmitted(false);
    }
  };

  return (
    <Container>
      <PageTitle variant="h1">Contact</PageTitle>
      <SecondaryTitle variant="h6">Email</SecondaryTitle>
      <EmailForm ref={form} onSubmit={sendEmail}>
        <EmailTextField
          hiddenLabel
          label="name"
          name="from_name"
          variant="outlined"
          required
        />
        <EmailTextField
          hiddenLabel
          label="email"
          type="email"
          name="reply_to"
          variant="outlined"
          required
        />
        <MessageTextField
          hiddenLabel
          label="message"
          type="message"
          multiline
          minRows={4}
          name="message"
          variant="outlined"
          required
        />
        {emailSent && (
          <EmailAlert
            onClose={() => {
              setEmailSent(false);
            }}
            severity="success"
          >
            <AlertTitle>Success</AlertTitle>
            Your email has been sent. We will be in touch shortly.
          </EmailAlert>
        )}
        <SubmitButton
          variant="contained"
          disabled={formSubmitted}
          onClick={sendEmail}
        >
          Send
        </SubmitButton>
      </EmailForm>
      <SecondaryTitle variant="h6">Postal</SecondaryTitle>
      <Paragraph>
        Deanwell Global Music<br></br>685 Erin Ave<br></br>Atlanta, Ga 30310
        <br></br>USA
      </Paragraph>
    </Container>
  );
};

export default Contact;

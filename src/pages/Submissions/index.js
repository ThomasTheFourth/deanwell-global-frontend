import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  AlertTitle,
} from "@mui/material";
import {
  Container,
  PageTitle,
  Intro,
  CalloutBox,
  CalloutTitle,
  CalloutText,
  SecondaryTitle,
  SubmissionForm,
  FormTextField,
  FieldGroup,
  GroupLabel,
  GroupHint,
  TypeError,
  SubmissionAlert,
  SubmitButton,
} from "./styles";

const SUBMISSION_TYPES = [
  "Reissue of a forgotten or rediscovered project",
  "Current, active band seeking a release",
  "The leftist, queer, anti-fascist compilation",
];

export const Submissions = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [typeError, setTypeError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const formEl = form.current;
    const formValid = formEl.reportValidity();
    if (!formValid) {
      setFormSubmitted(false);
      return;
    }

    const data = new FormData(formEl);
    const types = data.getAll("submission_type");
    if (types.length === 0) {
      setTypeError(true);
      setFormSubmitted(false);
      return;
    }
    setTypeError(false);

    const message = [
      `Submission type: ${types.join(", ")}`,
      `Project / artist name: ${data.get("project_name")}`,
      `Genre / scene: ${data.get("genre")}`,
      `Decade / era: ${data.get("decade") || "Not given"}`,
      `Location / scene origin: ${data.get("location") || "Not given"}`,
      `Links to material: ${data.get("links")}`,
      "",
      "About the project:",
      `${data.get("description") || "Not given"}`,
      "",
      `Owns or controls rights: ${data.get("rights") ? "Yes" : "No"}`,
    ].join("\n");

    emailjs
      .send(
        "service_6mrwxho",
        "template_87ru9na",
        {
          from_name: data.get("from_name"),
          reply_to: data.get("reply_to"),
          message,
        },
        "CgUdhftvLX9QAPtv9"
      )
      .then(() => {
        setEmailSent(true);
        formEl.reset();
        setFormSubmitted(false);
      });
  };

  return (
    <Container>
      <PageTitle variant="h1">Submissions</PageTitle>
      <Intro>
        Got a forgotten project, a bedroom recording, or a rediscovered tape?
        We want to hear it. Anything from any decade that never saw the light of
        day, or that sparked in a scene time forgot. Punk, metal, EBM, synth,
        new wave, post punk, and anything adjacent. We also want to hear from
        current, active bands looking for a release.
      </Intro>

      <CalloutBox>
        <CalloutTitle variant="h2">Current bands</CalloutTitle>
        <CalloutText>
          Active band looking for a release? We put out tape, CD, and digital to
          start, with vinyl depending on traction. Pick the current band option
          in the form below and send us your links.
        </CalloutText>
      </CalloutBox>

      <CalloutBox>
        <CalloutTitle variant="h2">Compilation call</CalloutTitle>
        <CalloutText>
          Open call for a vinyl compilation of leftist, queer, anti-fascist
          music. Synth, industrial, synthpop, techno, and adjacent sounds. Tick
          the compilation option in the form to be considered.
        </CalloutText>
      </CalloutBox>

      <SecondaryTitle variant="h6">Submit your material</SecondaryTitle>
      <SubmissionForm ref={form} onSubmit={sendEmail}>
        <FormTextField
          label="Your name"
          name="from_name"
          variant="outlined"
          required
          id="submission-name"
        />
        <FormTextField
          label="Email"
          type="email"
          name="reply_to"
          variant="outlined"
          required
          id="submission-email"
        />
        <FormTextField
          label="Project / artist name"
          name="project_name"
          variant="outlined"
          required
          id="submission-project"
        />

        <FieldGroup>
          <GroupLabel>What are you submitting?</GroupLabel>
          <GroupHint>Pick one or more.</GroupHint>
          <FormGroup>
            {SUBMISSION_TYPES.map((type) => (
              <FormControlLabel
                key={type}
                control={
                  <Checkbox name="submission_type" value={type} color="default" />
                }
                label={type}
              />
            ))}
          </FormGroup>
          {typeError && (
            <TypeError>Please choose at least one option.</TypeError>
          )}
        </FieldGroup>

        <FormTextField
          label="Genre / scene"
          name="genre"
          variant="outlined"
          required
          id="submission-genre"
        />
        <FormTextField
          label="Decade / era"
          name="decade"
          variant="outlined"
          id="submission-decade"
        />
        <FormTextField
          label="Location / scene origin"
          name="location"
          variant="outlined"
          id="submission-location"
        />
        <FormTextField
          label="Links to material"
          name="links"
          variant="outlined"
          required
          multiline
          minRows={2}
          helperText="Bandcamp, SoundCloud, Google Drive, WeTransfer, Dropbox, and similar."
          id="submission-links"
        />
        <FormTextField
          label="Tell us about the project"
          name="description"
          variant="outlined"
          multiline
          minRows={4}
          id="submission-description"
        />

        <FieldGroup>
          <FormControlLabel
            control={<Checkbox name="rights" value="yes" color="default" />}
            label="I own or control the rights to this material"
          />
        </FieldGroup>

        {emailSent && (
          <SubmissionAlert
            onClose={() => {
              setEmailSent(false);
            }}
            severity="success"
          >
            <AlertTitle>Success</AlertTitle>
            Thanks. Your submission has been sent. We read everything and will be
            in touch if it is a fit.
          </SubmissionAlert>
        )}

        <SubmitButton
          variant="contained"
          disabled={formSubmitted}
          onClick={sendEmail}
        >
          Send submission
        </SubmitButton>
      </SubmissionForm>
    </Container>
  );
};

export default Submissions;

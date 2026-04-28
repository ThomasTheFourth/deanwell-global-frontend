import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Alert } from "@mui/material";
import { Button } from "@mui/material";

export const Container = styled("div")`
  margin: 24px auto 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1024px;
  justify-content: center;
`;

export const PageTitle = styled(Typography)`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: 32px;
  letter-spacing: 2px;
  text-transform: uppercase;
  grid-column: 1/-1;
`;

export const EmailTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 16px;
`;

export const MessageTextField = styled(EmailTextField)`
  width: 100%;
`;

export const EmailForm = styled("form")`
  max-width: 500px;
  margin-top: 8px;
`;

export const EmailAlert = styled(Alert)`
  margin-bottom: 16px;
`;

export const SubmitButton = styled(Button)`
  background-color: ${(props) =>
    props.disabled ? "grey" : "black"} !important;
`;

export const Intro = styled("p")`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 24px;
`;

export const SecondaryTitle = styled(Typography)`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 16px;
  font-size: 16px;
`;

export const Paragraph = styled("p")`
  margin-top: 0;
`;

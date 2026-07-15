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

export const Intro = styled("p")`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 24px;
  max-width: 720px;
`;

export const CalloutBox = styled("div")`
  border: 2px solid black;
  background-color: #f5f5f5;
  padding: 16px 20px;
  margin-bottom: 24px;
  max-width: 720px;
`;

export const CalloutTitle = styled(Typography)`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const CalloutText = styled("p")`
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  margin: 0;
`;

export const SecondaryTitle = styled(Typography)`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 16px;
  font-size: 16px;
`;

export const SubmissionForm = styled("form")`
  max-width: 500px;
  margin-top: 8px;
`;

export const FormTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 16px;
`;

export const FieldGroup = styled("div")`
  margin-bottom: 16px;
`;

export const GroupLabel = styled("p")`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 4px 0;
`;

export const GroupHint = styled("p")`
  font-size: 13px;
  color: #777;
  margin: 0 0 8px 0;
`;

export const TypeError = styled("p")`
  color: #d32f2f;
  font-size: 13px;
  margin: 4px 0 0 0;
`;

export const SubmissionAlert = styled(Alert)`
  margin-bottom: 16px;
`;

export const SubmitButton = styled(Button)`
  background-color: ${(props) =>
    props.disabled ? "grey" : "black"} !important;
`;

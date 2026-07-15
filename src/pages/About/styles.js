import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Container = styled("div")`
  margin: 24px auto 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 700px;
`;

export const PageTitle = styled(Typography)`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: 32px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const SectionTitle = styled(Typography)`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export const Paragraph = styled("p")`
  font-size: 16px;
  line-height: 1.7;
  color: #333;
  margin-top: 0;
`;

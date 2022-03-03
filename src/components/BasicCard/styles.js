import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export const Container = styled(Card)`
  // max-width: 300px;
  padding-top: 0;
  // grid-column: auto-fsit, 20rem;
`;

export const ImageContainer = styled("div")`
  padding: 16px 16px 0 16px;
  height: 300px;
  overflow: hidden;
  margin: 0 auto;
`;

export const Image = styled("img")`
  width: -webkit-fill-available;
  max-height: 300px;
`;

export const SecondaryText = styled(Typography)`
  font-size: 14px;
`;

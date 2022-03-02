import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export const Container = styled(Card)`
  max-width: 300px;
  padding-top: 0;
`;

export const ImageContainer = styled("div")`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  padding: 0 16px 16px 16px;
  overflow: hidden;
`;

export const Image = styled("img")`
  max-height: 300px;
  max-width: 300px;
`;

export const SecondaryText = styled(Typography)`
  font-size: 14px;
`;

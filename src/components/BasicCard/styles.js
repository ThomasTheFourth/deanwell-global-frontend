import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export const Container = styled(Card)`
  max-width: 300px;
  padding-top: 0;
`;

export const ImageContainer = styled("div")`
  padding: 16px 16px 0 16px;
  width: 268px;
  height: 268px;
`;

export const Image = styled("img")`
  max-height: 268px;
  width: 268px;
`;

export const SecondaryText = styled(Typography)`
  font-size: 14px;
`;

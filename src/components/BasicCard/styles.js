import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";

export const Container = styled(Card)`
  padding-top: 0;
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

export const ReleaseCardContent = styled(CardContent)`
  padding-top: 8px;
`;

export const ArtistName = styled(Typography)`
  font-size: 16px;
`;

import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";

export const Container = styled(Card)`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

export const ImageContainer = styled("div")`
  flex: 0 0 380px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #fbfbfb;

  @media (max-width: 700px) {
    flex: 1 1 auto;
  }
`;

export const Image = styled("img")`
  width: 100%;
  height: auto;
  display: block;
`;

export const FeaturedProductCardContent = styled("div")`
  flex: 1 1 auto;
  min-width: 0;
`;

export const Eyebrow = styled(Typography)`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 4px;
`;

export const FeaturedProductName = styled(Typography)`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: 28px;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1.15;
`;

export const AlbumTitle = styled(Typography)`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #333;
  margin-bottom: 8px;
`;

export const SecondaryText = styled(Typography)`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const BuyButtonRow = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const BuyButton = styled(Button)`
  color: white;
  background-color: black !important;
`;

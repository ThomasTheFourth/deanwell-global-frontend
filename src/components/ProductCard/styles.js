import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";

export const Container = styled(Card)`
  padding-top: 0;
  padding: 16px 16px 0 16px;
`;

export const ImageContainer = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  height: 300px;
  overflow: hidden;
  margin: 0 auto;
  background-color: #fbfbfb;
`;

export const Image = styled("img")`
  width: -webkit-fill-available;
  max-height: 300px;
  opacity: ${({ soldOut }) => (soldOut ? 0.55 : 1)};
`;

export const SecondaryText = styled(Typography)`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const ProductCardContent = styled(CardContent)`
  padding-left: 0;
  padding-right: 0;
  padding-top: 8px;
`;

export const ProductName = styled(Typography)`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 16px;
`;

export const BuyButtonRow = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 8px;
`;

export const BuyButton = styled(Button)`
  color: white;
  background-color: black !important;

  &:disabled {
    color: #cccccc;
    background-color: #6e6e6e !important;
  }
`;

export const SoldOutRibbon = styled("div")`
  position: absolute;
  bottom: 28px;
  right: -54px;
  width: 200px;
  padding: 6px 0;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  color: white;
  background-color: black;
  transform: rotate(-45deg);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
`;

export const SoldOutText = styled(Typography)`
  font-family: "Oswald", sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

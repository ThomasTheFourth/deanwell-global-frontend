import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled("div")`
  margin: 24px auto 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1024px;
  justify-content: center;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, 20rem);
`;

export const LoaderContainer = styled("div")`
  display: flex;
  margin-top: 24px;
`;

export const LoaderImage = styled("img")`
  margin: 0 auto;
  height: 48px;
`;

export const PageTitle = styled(Typography)`
  font-size: 32px;
  grid-column: 1/-1;
`;

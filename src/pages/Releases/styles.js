import { styled } from "@mui/system";

export const Container = styled("div")`
  margin: 24px auto 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1200px;
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

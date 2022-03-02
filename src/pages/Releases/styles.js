import { styled } from "@mui/system";

export const Container = styled("div")`
  margin: 24px auto 0 auto;
  max-width: 1200px;
  justify-content: center;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, 20rem);
`;

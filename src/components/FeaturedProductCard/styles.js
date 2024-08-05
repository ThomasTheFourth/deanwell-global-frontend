import { styled } from "@mui/system";
import { Card } from '@mui/material';

export const FeaturedContainer = styled("div")`
  width: auto;
  margin-bottom: 16px;
`;

export const FeaturedCard = styled(Card)`
  display: flex;
  flex-direction: row;
  padding: 16px;
  gap: 16px;
  img {
    width: 40%;
  }
  p {
    font-size: 14px;  
  }
  @media only screen and (max-width: 734px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;

export const FeaturedCardInfo = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  h2, p {
    padding: 0;
    margin: 0;
  }
  button {
    margin-right: auto
  }
  h2 {
    font-size: 24px;
    @media only screen and (max-width: 734px) {
      font-size: 16px;
    }
  }
`;



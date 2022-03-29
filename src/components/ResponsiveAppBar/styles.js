import { AppBar, Button, Typography, Box, Link } from "@mui/material";
import { IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const AppBarStyled = styled(AppBar)`
  background-color: black;
`;

export const ButtonStyled = styled(Button)`
  color: ${(props) => (props.active ? "grey" : "white")};
  &:hover {
    color: grey;
  }
`;

export const Title = styled(Typography)`
  &:hover {
    color: grey;
  }
  cursor: pointer;
  margin-right: 24px;
`;

export const ButtonContainer = styled("div")`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const HamburgerMenu = styled(Box)`
  margin-left: auto;
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const CartButton = styled(IconButton)`
  display: flex;
  margin-left: auto;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

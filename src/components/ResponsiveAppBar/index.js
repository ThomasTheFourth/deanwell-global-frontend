import React, { useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { createBrowserHistory } from "history";
import {
  AppBarStyled,
  ButtonStyled,
  Title,
  ButtonContainer,
  HamburgerMenu,
  MenuLink,
} from "./styles";

const pages = ["RELEASES", "CONTACT"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const history = createBrowserHistory();

  const currentPath = history.location.pathname.replace("/", "");

  return (
    <AppBarStyled position="static">
      <Container>
        <Toolbar>
          <ButtonStyled href="/">
            <Title variant="h6">DEANWELL GLOBAL MUSIC</Title>
          </ButtonStyled>
          <HamburgerMenu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuLink href={`/${page}`} key={page}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </MenuLink>
              ))}
            </Menu>
          </HamburgerMenu>
          <ButtonContainer>
            {pages.map((page) => (
              <ButtonStyled
                key={page}
                active={
                  page.toLowerCase() === currentPath ||
                  (currentPath === "" && page === pages[0])
                    ? true.toString()
                    : undefined
                }
                href={`/${page.toLowerCase()}`}
              >
                {page}
              </ButtonStyled>
            ))}
          </ButtonContainer>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
export default ResponsiveAppBar;

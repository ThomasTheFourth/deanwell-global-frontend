import React, { useRef } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { createBrowserHistory } from "history";
import {
  AppBarStyled,
  ButtonStyled,
  Title,
  ButtonContainer,
  HamburgerMenu,
  CartButton,
  MenuLink,
} from "./styles";

const pages = ["RELEASES", "ARTISTS", "SHOP", "SUBMIT", "CONTACT"];

// Most nav paths are just the lowercased label, but a few differ.
const pagePaths = {
  SUBMIT: "/submissions",
};

const pathFor = (page) => pagePaths[page] || `/${page.toLowerCase()}`;
const slugFor = (page) => pathFor(page).replace("/", "");

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const cartButton = useRef();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const history = createBrowserHistory();

  const currentPath = history.location.pathname.replace("/", "");

  const openCart = () => {
    cartButton.current.click();
    handleCloseNavMenu();
  };

  return (
    <AppBarStyled position="static" component="nav" aria-label="Main navigation">
      <Container>
        <Toolbar>
          <ButtonStyled href={"/"}>
            <Title variant="h6">DEANWELL GLOBAL MUSIC</Title>
          </ButtonStyled>
          <button
            ref={cartButton}
            style={{ display: "none" }}
            className="snipcart-checkout"
            aria-hidden="true"
            tabIndex={-1}
          />
          <HamburgerMenu>
            <IconButton
              size="large"
              aria-label="Open navigation menu"
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
                <MenuLink href={pathFor(page)} key={page}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </MenuLink>
              ))}
              <MenuLink>
                <MenuItem onClick={openCart}>
                  <Typography textAlign="center">SHOPPING CART</Typography>
                </MenuItem>
              </MenuLink>
            </Menu>
          </HamburgerMenu>
          <ButtonContainer>
            {pages.map((page) => (
              <ButtonStyled
                key={page}
                active={
                  slugFor(page) === currentPath ||
                  (currentPath === "" && page === pages[0])
                    ? true.toString()
                    : undefined
                }
                href={pathFor(page)}
              >
                {page}
              </ButtonStyled>
            ))}
          </ButtonContainer>
          <CartButton
            size="large"
            aria-label="shopping-cart"
            aria-controls="shopping-cart-button"
            onClick={openCart}
            color="inherit"
          >
            <ShoppingCart />
          </CartButton>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
export default ResponsiveAppBar;

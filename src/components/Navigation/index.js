// import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectToken } from "../../store/user/selectors";
// import NavbarItem from "./NavbarItem";
// import LoggedIn from "./LoggedIn";
// import LoggedOut from "./LoggedOut";

// export default function Navigation() {
//   const token = useSelector(selectToken);

//   const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav style={{ width: "100%" }} fill>
//           <NavbarItem path="/" linkText="Home" />
//           <Navbar.Brand as={NavLink} to="/">
//             MY MANGA COLLECTION
//           </Navbar.Brand>
//           {loginLogoutControls}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate, Link } from "react-router-dom";


// const pages = ['Home', 'My Collection'];
const settings = ['Profile','Logout'];

const ResponsiveAppBar = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();

    const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigateHomePage = () => {
    setAnchorElNav(navigate("/"))
  }

  const navigateMyCollection = () => {
    setAnchorElNav(navigate("/mangas"));
    };

  return (
    <AppBar position="static" sx={{ bgcolor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            My Manga Collection
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              id="menu-appbar"
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={navigateHomePage}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={navigateMyCollection}>
                <Typography textAlign="center">My Collection</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={navigateHomePage}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            <Button
              onClick={navigateMyCollection}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              My Collection
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {loginLogoutControls}
            <Menu
              sx={{ mt: "40px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "right",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};;
export default ResponsiveAppBar;

import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Box,
  Button,
  Avatar,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import { useNavigate, useLocation } from "react-router-dom";

import Logo from "../../../assets/logos/logo.svg";

const pages = ["Dashboard", "Patients", "Clinics", "Care Team", "Settings"];
const settings = ["Profile", "Account", "Logout"];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );


  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const fullName = "John Doe";
  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <Container maxWidth="xxl" disableGutters>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: { xs: 50, sm: 50, md: 50, lg: 50 }, 
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexGrow: 1 }}>
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: "neutral.70" }} />
              </IconButton>
              <Box
                component="img"
                src={Logo}
                alt="Logo"
                onClick={() => navigate("/app/dashboard")}
                sx={{ height: 42, cursor: "pointer" }}
              />
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 2,
                }}
              >
                {pages.map((page) => {
                  const path = `/app/${page.toLowerCase().replace(" ", "-")}`;
                  const isActive = location.pathname === path;

                  return (
                    <Button
                      key={page}
                      onClick={() => navigate(path)}
                      sx={{
                        textTransform: "none",
                        fontSize: 15,
                        px: 2.5,
                        py: 1.5,
                        borderRadius: "0px",
                        position: "relative",
                        backgroundColor: isActive ? "#DDEDFF" : "transparent",
                        color: isActive ? "primary.main" : "neutral.80",

                        "&::after": isActive
                          ? {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              height: "1.5px",
                              backgroundColor: "primary.0",
                              borderRadius: 2,
                              borderBottom: "2px solid ",
                            }
                          : {},

                        "&:hover": {
                          backgroundColor: isActive
                            ? "#DDEDFF"
                            : "rgba(0,0,0,0.04)",
                        },
                      }}
                    >
                      {page}
                    </Button>
                  );
                })}
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap:'0.5rem' }}>
              <IconButton>
                <SearchIcon sx={(theme)=>({color:theme.palette.neutral[70]})} />
              </IconButton>

              <IconButton>
                <NotificationsIcon sx={(theme)=>({color:theme.palette.neutral[70]})} />
              </IconButton>

              <Box
                onClick={handleOpenUserMenu}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  p: 1,
                  borderRadius: 1,
                  "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#750D8C",
                    color: "#FFF",
                    width: 34,
                    height: 34,
                    fontSize: 15,
                  }}
                >
                  {initials}
                </Avatar>
                <Typography variant="body14PX400FW" sx={(theme)=>({color:theme.palette.neutral[70]})} >
                  {fullName}
                </Typography>
                <KeyboardArrowDownIcon sx={(theme)=>({ color: theme.palette.neutral[70],width:'20px' })} />
              </Box>

              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, mt: 2 }}>
          <List>
            {pages.map((page) => {
              const path = `/app/${page.toLowerCase().replace(" ", "-")}`;
              const isActive = location.pathname === path;

              return (
                <ListItemButton
                  key={page}
                  onClick={() => {
                    navigate(path);
                    setMobileOpen(false);
                  }}
                  sx={{
                    backgroundColor: isActive ? "#DDEDFF" : "transparent",
                    borderLeft: isActive ? "4px solid #1976d2" : "4px solid transparent",
                  }}
                >
                  <ListItemText
                    primary={page}
                    primaryTypographyProps={{
                      sx: {
                        color: isActive ? "primary.main" : "neutral.80",
                        fontWeight: isActive ? 600 : 400,
                      },
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

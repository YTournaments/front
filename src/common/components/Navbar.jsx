import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useAdminContext } from "../hooks/useAdminContext";

import logo from "../../assets/android-chrome-192x192.png";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

const drawerWidth = 240;

const navItems = {
  admin: [
    {
      id: 1,
      text: "Dashboard",
      //icon: <DashboardIcon />,
      path: "/admin",
    },
    {
      id: 2,
      text: "Blog",
      //icon: <BlogIcon />,
      path: "/admin/blog",
    },
    {
      id: 3,
      text: "Tournament",
      //icon: <TournamentIcon />,
      path: "/tournament",
    },
    {
      id: 4,
      text: "User",
      // icon: <UserIcon />,
      path: "/admin/user",
    },
  ],
  user: [
    {
      id: 5,
      text: "Tournament",
      //icon: <TournamentIcon />,
      path: "/tournament",
    },
    {
      id: 6,
      text: "Event",
      //icon: <EventIcon />,
      path: "/event",
    },
    {
      id: 7,

      text: "Profile",
      //  icon: <ProfileIcon />,
      path: "/profile",
    },
  ],
  guest: [
    {
      id: 8,

      text: "Tournaments",
      //icon: <TournamentIcon />,
      path: "/tournament",
      color: "transparent",
    },
    {
      id: 9,

      text: "Login",
      //   icon: <LoginIcon />,
      path: "/login",
      color: "transparent",
    },
    {
      id: 10,
      text: "Register",
      //icon: <RegisterIcon />,
      path: "/register",
      color: "primary.main",
    },
  ],
};

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  //const { admin: isAdmin } = useAdminContext();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt="logo ytournaments" width="60" />
      </Typography>
      <Divider />
      <List>
        {navItems.guest.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(item.path)}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const appbar = (
    <>
      <AppBar
        component="nav"
        color="transparent"
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar sx={{ mx: 10 }}>
          <IconButton
            aria-label="open menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            color="primary"
          >
            Open
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src={logo} alt="logo ytournaments" width="60" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.guest.map((item) => (
              <Button
                key={item.id}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "100px",
                  backgroundColor: item.color,
                  margin: "0 0.5rem",
                  padding: "0.5rem 1rem",
                }}
                onClick={() => navigate(item.path)}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
  return (
    <Box component="main" sx={{ p: 6 }}>
      {appbar}
    </Box>
  );
};

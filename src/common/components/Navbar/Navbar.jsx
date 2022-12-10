import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { useAdminContext } from "../hooks/useAdminContext";

import logo from "../../../assets/android-chrome-192x192.png";
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
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useLogout } from "../../hooks/useLogout";
import { useRoleContext } from "../../hooks/useRoleContext";

const drawerWidth = 240;

const navItems = {
  superadmin: [
    {
      id: 1,
      text: "Dashboard",
      //icon: <DashboardIcon />,
      path: "/dashboard",
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
      path: "/tournaments",
    },
    {
      id: 4,
      text: "User",
      // icon: <UserIcon />,
      path: "/admin/user",
    },
    {
      id: 5,
      text: "Logout",
      // icon: <UserIcon />,
    },
  ],
  admin: [
    {
      id: 1,
      text: "Dashboard",
      //icon: <DashboardIcon />,
      path: "/dashboard",
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
      path: "/tournaments",
    },
    {
      id: 4,
      text: "User",
      // icon: <UserIcon />,
      path: "/admin/user",
    },
    {
      id: 5,
      text: "Logout",
      // icon: <UserIcon />,
    },
  ],
  user: [
    {
      id: 5,
      text: "Tournament",
      //icon: <TournamentIcon />,
      path: "/tournaments",
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
    {
      id: 8,
      text: "Logout",
      // icon: <UserIcon />,
    },
  ],
  guest: [
    {
      id: 8,

      text: "Tournois",
      //icon: <TournamentIcon />,
      path: "/#tournois",
      color: "transparent",
    },
    {
      id: 9,

      text: "Evenement",
      //icon: <TournamentIcon />,
      path: "#evenement",
      color: "transparent",
    },
    {
      id: 10,

      text: "Notre Concept",
      //icon: <TournamentIcon />,
      path: "#concept",
      color: "transparent",
    },
    {
      id: 11,

      text: "Se connecter",
      //   icon: <LoginIcon />,
      path: "/login",
      color: "transparent",
    },
    {
      id: 12,
      text: "S'inscrire",
      //icon: <RegisterIcon />,
      path: "/register",
      color: "primary.main",
    },
  ],
};

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { role: isrole } = useRoleContext();
  const [updateNav, setUpdateNav] = useState(navItems["guest"]);
  const { logout } = useLogout();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleLogout = async (item) => {
    if (item.text === "Logout") {
      return logout();
    }
    return navigate(item.path);
  };

  useMemo(
    () =>
      isrole ? setUpdateNav(navItems[isrole]) : setUpdateNav(navItems["guest"]),
    [isrole]
  );
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", background: "transparent" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt="logo ytournaments" width="60" />
      </Typography>
      <Divider />
      <List>
        {updateNav.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
              }}
              onClick={() => handleLogout(item)}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: "2.5rem",
                }}
              />
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
        position="absolute"
        sx={{
          boxShadow: "none",
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
            <DragHandleIcon
              sx={{
                color: "white",
                fontSize: "3rem",
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            onClick={() => navigate("/")}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              src={logo}
              alt="logo ytournaments"
              width="60"
              onClick={() => navigate("/")}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {updateNav.map((item) => (
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
                onClick={() => handleLogout(item)}
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
              background: "rgba(255, 255, 255, 0.30)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
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

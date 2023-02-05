import { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
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
  ListItemIcon,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLogout } from "../../hooks/useLogout";
import { useRoleContext } from "../../hooks/useRoleContext";
import { CustomMenu } from "../Menu/Menu";

const drawerWidth = 240;
const mobileItems = [
  {
    text: "Profil",
    //icon: <ProfileIcon />,
    path: "/profil",
  },
  {
    text: "Logout",
    icon: <LogoutIcon />,
    action: "logout",
  },
];
const commonItems = [
  {
    text: "Tournois",
    //icon: <TournamentIcon />,
    path: "/home#tournament",
  },
  {
    text: "Organiser",
    //  icon: <ProfileIcon />,
    path: "/tournament/create",
  },

  {
    component: (
      <CustomMenu
        component={<Avatar sx={{ width: 32, height: 32 }} />}
        items={[
          {
            id: 1,
            text: "Profil",
            path: "/profil",
          },
          {
            id: 2,
            text: "Logout",
            action: "logout",
          },
        ]}
      />
    ),
    action: "profil",
  },
];
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
      text: "Créer Blog",
      //icon: <BlogIcon />,
      path: "/admin/create",
    },
    {
      id: 3,
      text: "Blog",
      path: "/blog",
    },
    ...commonItems,
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
      text: "Créer Blog",
      //icon: <BlogIcon />,
      path: "/admin/create",
    },
    {
      id: 3,
      text: "Blog",
      path: "/blog",
    },
    ...commonItems,
  ],
  user: [...commonItems],
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
      path: "/#evenements",
      color: "transparent",
    },
    {
      id: 10,

      text: "Partenaire",
      //icon: <TournamentIcon />,
      path: "/#partenaire",
      color: "transparent",
    },
    {
      id: 11,

      text: "Se connecter",
      //   icon: <LoginIcon />,
      path: "/auth/login",
      color: "transparent",
    },
    {
      id: 12,
      text: "S'inscrire",
      //icon: <RegisterIcon />,
      path: "/auth/register",
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
    if (item.action === "logout") {
      return logout();
    } else {
      return navigate(item.path);
    }
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
      <Typography
        variant="h6"
        sx={{ my: 2 }}
        onClick={() => (isrole !== "guest" ? navigate("/home") : navigate("/"))}
      >
        <img src={logo} alt="logo ytournaments" width="60" />
      </Typography>
      <Divider />
      <List>
        {updateNav.concat(mobileItems).map((item, id) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
              }}
              onClick={() => handleLogout(item)}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: "auto",
                  marginRight: "0",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text || item.component.text}
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
            component={Link}
            to={isrole !== "guest" ? "/home" : "/"}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              src={logo}
              alt="logo ytournaments"
              style={{
                width: "60px",
                height: "60px",
              }}
            />
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            {updateNav.map((item, id) => (
              <>
                {item.text ? (
                  <Button
                    key={id}
                    sx={{
                      fontWeight: "bold",
                      borderRadius: "100px",
                      backgroundColor: item.color,
                      margin: "0 0.5rem",
                      padding: "0.5rem 1rem",
                    }}
                    onClick={() => handleLogout(item)}
                  >
                    {item.action ? (
                      item.icon
                    ) : (
                      <Link
                        key={id}
                        to={item.path}
                        reloadDocument
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        {item.text}
                      </Link>
                    )}
                  </Button>
                ) : (
                  <Button key={id}>
                    {item.component ? item.component : null}
                  </Button>
                )}
              </>
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

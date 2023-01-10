import React, { useState } from "react";
import { Menu, MenuItem, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
export const CustomMenu = (props) => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { items, component } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = async (item) => {
    if (item.action === "logout") {
      return logout();
    } else {
      return navigate(item.path);
    }
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {component}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            ml: 8,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 30,
              left: 10,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {items.map((item) => (
          <MenuItem key={item.id} onClick={() => handleItemClick(item)}>
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal, Typography, IconButton } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  width: "100%",

  bgcolor: "background.paper",
  border: "2px solid #FFF",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export const CustomModal = (props) => {
  const { isOpen, onClose, title, description, children } = props;

  return (
    <div>
      <Modal
        keepMounted
        open={isOpen}
        onClose={onClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <IconButton
            onClick={onClose}
            sx={{
              top: "-30px",
              left: "-20px",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h4">
            {title}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

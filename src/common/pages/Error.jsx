import React from "react";
import { Box, Typography } from "@mui/material";
import background from "../../assets/background.gif";
const Error = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "8rem",
          display: "flex",
          fontWeight: "bold",
          color: "transparent",
          textAlign: "center",
          margin: "2rem 0",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Oops something went wrong
      </Typography>
      <Typography
        sx={{
          fontSize: "6rem",
          fontWeight: "bold",
          color: "secondary.main",
          textAlign: "center",
          margin: "2rem 0",
        }}
      >
        404 Error
      </Typography>
    </Box>
  );
};

export default Error;

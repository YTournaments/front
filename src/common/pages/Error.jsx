import React from "react";
import { Box, Typography } from "@mui/material";

import { Navbar } from "@/common/components/Navbar/Navbar";

const Error = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Aie, nous avons rencontrer une erreur
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: "bold",

            textAlign: "center",
            margin: "2rem 0",
          }}
        >
          404 Error
        </Typography>
      </Box>
    </Box>
  );
};

export default Error;

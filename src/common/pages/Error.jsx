import React from "react";
import { Box, Typography } from "@mui/material";
import background from "@/assets/background.gif";
import { Navbar } from "@/common/components/Navbar/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
          Aie, nous avons rencontrer une erreur
        </Typography>
        <Typography
          sx={{
            fontSize: "6rem",
            fontWeight: "bold",

            textAlign: "center",
            margin: "2rem 0",
          }}
        >
          404 Error
        </Typography>
      </Box>
    </>
  );
};

export default Error;

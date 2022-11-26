import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import { CustomButton } from "../components/Button";
import { Navbar } from "../components/Navbar";
import Video from "../components/Video";

const Landing = () => {
  const navigate = useNavigate();
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <Box>
      <Navbar />
      <Video />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "5rem",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            backgroundSize: "cover",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "white",
          }}
        >
          Trouve ton Tournois ici!
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            margin: "2rem 0",
          }}
        >
          Plus de 1000 tournois disponibles
        </Typography>
        <CustomButton
          variant="contained"
          color="secondary"
          onClick={() => navigate("/login")}
          sx={{
            margin: "1rem",
            padding: "1rem 2rem",
            fontWeight: "bold",
          }}
        >
          Rejoindre maintenant
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Landing;

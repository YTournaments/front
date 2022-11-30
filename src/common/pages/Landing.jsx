import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, Grid, Typography } from "@mui/material";
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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
  }));
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
          Devenez le maître de votre tournois !
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: "2rem",
            fontWeight: "normal",
            color: "white",
            textAlign: "center",
            margin: "2rem 0",
          }}
        >
          Plus de 1000 tournois disponibles
        </Typography>
        <CustomButton
          variant="contained"
          color="purple"
          onClick={() => navigate("/login")}
          sx={{
            margin: "1rem",
            padding: "1rem 2rem",
            fontWeight: "bold",
          }}
        >
          Nous rejoindre
        </CustomButton>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Tournois
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;

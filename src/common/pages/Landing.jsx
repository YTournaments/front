import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, Grid, Typography, Container } from "@mui/material";
import { CustomButton } from "../components/Button";
import { Navbar } from "../components/Navbar";
import Video from "../components/Video";
import CardCustom from "../components/Card/CardCustom";
import ImageWarzone from "../../assets/warzoneImage.png";

const Landing = () => {
  const navigate = useNavigate();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
  }));

  return (
    <>
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
      <Container
        maxWidth="xl"
        sx={{
          color: "white",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 4 }}
            rowSpacing={{ xs: 4, sm: 8, md: 10 }}
            columns={{ xs: 1, sm: 2, md: 2, lg: 4 }}
          >
            {Array.from(Array(8)).map((_, index) => (
              <Grid item xs={2} sm={1} md={1} key={index}>
                <CardCustom imageGame={ImageWarzone} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            margin: "10rem 0",
          }}
        >
          <Typography id="tournois" variant="h2" sx={{ fontWeight: "bold" }}>
            Tournois
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Landing;

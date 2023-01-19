import React from "react";
import { useNavigate } from "react-router-dom";

import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Grid, Typography, Container, Paper } from "@mui/material";
import { CustomButton } from "@/common/components/Button/Button";
import { Navbar } from "@/common/components/Navbar/Navbar";
import Video from "@/common/components/Video/Video";
import CardImage from "@/common/components/Card/CardImage";
import { landingVideo } from "@/assets/video/index";
import CardCustom from "@/common/components/Card/CardCustom";
import {
  warzone,
  warcraft,
  apexLegends,
  superSmashBros,
  nba2k23,
  bloodHunt,
  mortalKombat,
  fifa23,
} from "@/assets/img/index";

const Landing = () => {
  const navigate = useNavigate();

  const images = [
    warzone,
    fifa23,
    mortalKombat,
    superSmashBros,
    warcraft,
    apexLegends,
    nba2k23,
    bloodHunt,
  ];
  return (
    <>
      <Navbar />
      <Video video={landingVideo} />
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
          component="h1"
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            backgroundSize: "cover",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "white",
          }}
        >
          Devenez le maître de votre tournoi !
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{
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
                <CardCustom image={images[index]} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "10rem 0",
          }}
        >
          <Typography id="tournois" variant="h2" sx={{ fontWeight: "bold" }}>
            Tournois
          </Typography>
          <Grid
            container
            sx={{
              display: "flex",
              my: 10,
            }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <CardImage
                  title={"tournois"}
                  description={"le tournois débute le "}
                  date={Date.now()}
                />
              </Grid>
            ))}
          </Grid>
          <Typography id="evenement" variant="h2" sx={{ fontWeight: "bold" }}>
            Evenement
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Landing;

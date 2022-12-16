import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CustomButton from "@/common/components/Button/Button";
import { SearchBar } from "@/common/components/SearchBar/SearchBar";
import { Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Video from "@/common/components/Video/Video";
import background from "@/assets/landingVideo.mp4";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Video video={background} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
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
          Nouveau tournoi en ligne !
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
          Ce tournois sera cloturé le 30/06/2021
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
          Participer au tournoi
        </CustomButton>
      </Box>
      <Container
        maxWidth="xl"
        sx={{ color: "white", border: "1px solid red", height: "100vh" }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            alignContent: "flex-start",
            width: "100%",
            overflow: "auto",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              border: "1px solid red",
              width: "30%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
              Filtre
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Categorie:
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <CustomButton
                    variant="contained"
                    color="purple"
                    onClick={() => navigate("/home")}
                    sx={{
                      margin: "1rem",
                      padding: "1rem 2rem",
                      fontWeight: "bold",
                    }}
                  >
                    1vs1
                  </CustomButton>
                  <CustomButton
                    variant="contained"
                    color="purple"
                    onClick={() => navigate("/home")}
                    sx={{
                      margin: "1rem",
                      padding: "1rem 2rem",
                      fontWeight: "bold",
                    }}
                  >
                    2vs2
                  </CustomButton>
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              border: "1px solid red",
              width: "70%",
            }}
          >
            <SearchBar />
            <Grid
              container
              spacing={2}
              sx={{
                mt: 4,
                pl: 4,
                display: "flex",

                width: "100%",
                border: "1px solid green",

                alignItems: "center",
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => (
                <Grid key={value} item xs={12} sm={6} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      borderRadius: 2,
                      flexDirection: "column",
                      height: 220,
                      width: 200,
                    }}
                  ></Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;

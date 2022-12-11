import React from "react";
import { Box, Grid } from "@mui/material";
import Video from "@/common/components/Video/Video";
import VersusVideo from "@/assets/versusVideo.mp4";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
const Match = () => {
  const location = useLocation();
  const { away, home, roundIndex, seedIndex } = location.state;
  return (
    <Box>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          margin: "2rem 0",
        }}
      >
        Match en cours
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          margin: "2rem 0",
        }}
      >
        {roundIndex} - {seedIndex}
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "10rem ",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "purple",
              textAlign: "center",
            }}
          >
            {home.name}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            {away.name}
          </Typography>
        </Grid>
      </Grid>
      <Video video={VersusVideo} />
    </Box>
  );
};

export default Match;

import { Button, Container } from "@mui/material";
import React from "react";
import { appName } from "../constants";
const Landing = () => {
  return (
    <Container>
      <Button variant="contained" color="primary">
        {appName}
      </Button>
      <Button variant="contained" color="info">
        {appName}
      </Button>
      <Button variant="contained" color="secondary">
        {appName}
      </Button>
      <Button variant="contained" color="tertiary">
        {appName}
      </Button>
    </Container>
  );
};

export default Landing;

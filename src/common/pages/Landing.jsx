import { Container } from "@mui/material";
import { CustomButton } from "../components/Button";
import React from "react";
import { appName } from "../constants";
const Landing = () => {
  return (
    <Container>
      <CustomButton variant="contained" color="primary" size="large">
        lol
      </CustomButton>
      <CustomButton variant="contained" color="info">
        {appName}
      </CustomButton>
      <CustomButton variant="contained" color="secondary">
        {appName}
      </CustomButton>
      <CustomButton variant="contained" color="tertiary">
        {appName}
      </CustomButton>
    </Container>
  );
};

export default Landing;

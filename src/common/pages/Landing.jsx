import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Typography } from "@mui/material";
import { CustomButton } from "../components/Button";
import { appName } from "../constants";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography>Landing Page test</Typography>
      <CustomButton
        variant="contained"
        color="primary"
        onClick={() => navigate("/login")}
        size="large"
      >
        login
      </CustomButton>
      <CustomButton
        variant="contained"
        color="info"
        onClick={() => navigate("/register")}
      >
        register
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

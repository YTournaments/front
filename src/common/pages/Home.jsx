import React from "react";
import { Container } from "@mui/material";
import CustomButton from "@/common/components/Button/Button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ mt: 1, height: "100vh" }}>
      <h2>You are in the app</h2>
      <CustomButton
        variant="contained"
        color="primary"
        onClick={() => navigate("/blog")}
      >
        Le blog
      </CustomButton>
      <CustomButton
        variant="contained"
        color="info"
        onClick={() => navigate("/admin/blog")}
      >
        Admin creation blog
      </CustomButton>
      <CustomButton
        variant="contained"
        color="primary"
        onClick={() => navigate("/tournament/create")}
      >
        Creer trournois
      </CustomButton>
    </Container>
  );
};

export default Home;

import { Box, Container } from "@mui/material";

import { useState, useEffect, lazy } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import formBackground from "@/assets/form-background.mp4";
import Video from "@/common/components/Video/Video";
import { Navbar } from "@/common/components/Navbar/Navbar";
import Footer from "@/common/components/Footer/Footer";
import { Wrapper } from "@/common/components/Wrapper/Wrapper";
const AuthLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("user");
      if (!token) {
        setLoading(false);
      } else {
        navigate("/");
        setLoading(true);
      }
    };
    checkAuth();
  }, [navigate]);
  return (
    <Container component="main">
      <Navbar />
      <Video video={formBackground} />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default AuthLayout;

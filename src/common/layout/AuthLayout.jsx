import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Container } from "@mui/material";
import Video from "@/common/components/Video/Video";
import { Wrapper } from "@/common/components/Wrapper/Wrapper";

import { formBackground } from "@/assets/video/index";

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
    <Container component="main" maxWidth="xl">
      <Video video={formBackground} />

      <Outlet />
    </Container>
  );
};

export default AuthLayout;

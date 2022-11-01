import { Container, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

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
      <Outlet />
    </Container>
  );
};

export default AuthLayout;

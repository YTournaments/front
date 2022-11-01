import { Container, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const isAuth = async () => {
      const token = localStorage.getItem("user");
      if (token) {
        setLoading(false);
        navigate("/app");
      } else {
        navigate("/login");
        setLoading(false);
      }
    };
    isAuth();
  }, [navigate]);
  return (
    <Container component="main">
      <Outlet />
    </Container>
  );
};

export default AuthLayout;

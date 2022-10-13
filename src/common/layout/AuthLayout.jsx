import { Container, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  return (
    <Container component="main">
      <Outlet />
    </Container>
  );
};

export default AuthLayout;

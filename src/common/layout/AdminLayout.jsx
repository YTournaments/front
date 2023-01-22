import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const isAuth = async () => {
      const user = localStorage.getItem("user");
      if (!user) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    };
    isAuth();
  }, [navigate]);
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default AdminLayout;

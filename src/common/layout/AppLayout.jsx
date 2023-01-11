import { Box, Container } from "@mui/material";
import { useState, useEffect, lazy } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "@/common/components/Footer/Footer";

import { Navbar } from "@/common/components/Navbar/Navbar";
const AppLayout = () => {
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
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default AppLayout;

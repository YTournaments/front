import { Box, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const AppLayout = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  return <Container>Hello world</Container>;
};

export default AppLayout;

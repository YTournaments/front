import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminContextProvider } from "@/common/context/adminContext";
import Footer from "@/common/components/Footer/Footer";
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
    <AdminContextProvider>
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </AdminContextProvider>

  );
};

export default AdminLayout;

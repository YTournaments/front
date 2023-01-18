import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Avatar,
  Badge,
  IconButton,
  Typography,
  FormControl,
} from "@mui/material";
import useAxios from "@/common/hooks/useAxios";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "@/common/api/index";
const Profil = () => {
  const [response, data, error, loading, axiosFetch] = useAxios();
  const [profil, setProfil] = useState({});
  const updateProfil = async () => {
    axiosFetch({
      axiosInstance: axios,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      method: "put",
      url: "api/v1/users/profilepicture",
      requestConfig: {
        data: {
          profilePicture: "https://picsum.photos/200/200",
        },
      },
    });
  };

  const getProfil = async () => {
    axiosFetch({
      axiosInstance: axios,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      method: "get",
      url: "api/v1/users/profil",
    });
  };

  useEffect(() => {
    getProfil();
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <IconButton
              onClick={updateProfil}
              sx={{
                position: "relative",
                top: "10px",
                left: "100px",
              }}
            >
              <AddPhotoAlternateIcon sx={{ color: "white" }} />
            </IconButton>
          }
        >
          <img
            src={
              data && data.banner
                ? data.banner
                : "https://picsum.photos/1000/300"
            }
            alt="image"
            style={{
              borderRadius: "28px",
            }}
          />
        </Badge>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            top: "-60px",
          }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <IconButton onClick={updateProfil}>
                <AddPhotoAlternateIcon sx={{ color: "white" }} />
              </IconButton>
            }
          >
            <Avatar
              src={
                data && data.profilePicture
                  ? data.profilePicture
                  : "https://picsum.photos/200/200"
              }
              sx={{
                width: 150,
                height: 150,
                border: "2px solid white",
              }}
            />
          </Badge>
        </Box>
        <Typography component="h1" variant="h5">
          Parametres du profil
        </Typography>
        <Typography fontSize="small">
          Modifiez les informations d’identification de votre compte
        </Typography>

        <Container
          maxWidth="md"
          sx={{
            mt: 4,
            border: "1px solid",
            display: "flex",
            borderRadius: "28px",
          }}
        >
          <Box>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "10px",
              }}
            >
              <Typography>Nom :</Typography>
              <Typography fontSize="small">{data && data.name}</Typography>
            </FormControl>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "10px",
              }}
            >
              <Typography>Email :</Typography>
              <Typography fontSize="small">{data && data.email}</Typography>
            </FormControl>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Profil;

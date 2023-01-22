import React, { useState, useEffect, useReducer } from "react";
import {
  Container,
  Box,
  Avatar,
  Badge,
  IconButton,
  Typography,
  FormControl,
  Grid,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import useAxios from "@/common/hooks/useAxios";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "@/common/api/index";
import { CustomModal } from "@/common/components/Modal/Modal";
import { CustomButton } from "@/common/components/Button/Button";
import CustomTextField from "@/common/components/Input/TextField";
const Profil = () => {
  const [response, data, error, loading, axiosFetch] = useAxios();
  const [type, setType] = useState("");
  const [picture, updatePicture] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      profilPicture: null,
      bannerPicture: null,
    }
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = (type) => {
    setIsOpen(true);
    setType(type);
  };

  const handlePicture = (e) => {
    const { files } = e.target;
    updatePicture({ [type]: files[0] });
  };
  const uploadPicture = async () => {
    if (type === "profilPicture") {
      updateProfilPicture();
    }
    if (type === "bannerPicture") {
      updateBannerPicture();
    }
  };

  const UploadModal = () => {
    const image = picture[type];
    console.log(image);
    return (
      <CustomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={"Mettre à jour votre photo de profil"}
        description={"Veuillez choisir une photo de profil"}
      >
        <FormControl>
          <input
            id="upload"
            name="upload"
            type="file"
            hidden
            accept=".jpg,.jpeg,.png,"
            onChange={(e) => {
              handlePicture(e);
            }}
          />
          <label htmlFor="upload">
            {image && `${image.name} - ${image.type}`}
            <CustomButton
              variant="contained"
              color={"purple"}
              loading={loading}
              component="span"
              sx={{ mx: 2 }}
            >
              Upload
            </CustomButton>
          </label>
        </FormControl>
        <CustomButton
          variant="contained"
          color={"primary"}
          loading={loading}
          onClick={() => uploadPicture()}
        >
          Envoyer
        </CustomButton>
      </CustomModal>
    );
  };

  const updateProfilPicture = () => {
    const formData = new FormData();
    formData.append("upload", picture.profilPicture);
    console.log(picture.profilPicture);
    axios({
      method: "put",
      url: "api/v1/users/profilepicture",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "Content-Length": `${picture.profilPicture.size}`,
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
    setIsOpen(false);
  };
  const updateBannerPicture = () => {
    const formData = new FormData();
    formData.append("upload", picture.bannerPicture);

    axios({
      method: "put",
      url: "api/v1/users/bannerpicture",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "Content-Length": `${picture.bannerPicture.size}`,
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
    setIsOpen(false);
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
        {isOpen && UploadModal()}
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <IconButton
              id="bannerPicture"
              onClick={() => handleModalOpen("bannerPicture")}
              sx={{
                position: "relative",
                top: "10px",
                left: "10px",
              }}
            >
              <AddPhotoAlternateIcon sx={{ color: "white" }} />
            </IconButton>
          }
        >
          <img
            src={data && data.banner}
            alt="image"
            style={{
              borderRadius: "28px",
              display: "flex",
              width: "100%",
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
              <IconButton
                id="profilPicture"
                onClick={() => handleModalOpen("profilPicture")}
              >
                <AddPhotoAlternateIcon sx={{ color: "white" }} />
              </IconButton>
            }
          >
            <Avatar
              src={data && data.profilePicture}
              sx={{
                width: "10rem",
                height: "10rem",
                objectFit: "cover",
                objectPosition: "center",
                display: "flex",

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
            border: "1px solid",
            display: "flex",
            borderRadius: "28px",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              mt: 2,
              mb: 2,
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Nom :</Typography>
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                id="name"
                required
                fullWidth
                name="name"
                type="name"
                label="name"
                autoComplete="name"
                placeholder="Name *"
                value={data && data.name}
                sx={{
                  width: "100%",
                  backgroundColor: "#34353C",
                }}
              />
            </Grid>

            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Adresse Mail :</Typography>
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                id="name"
                required
                fullWidth
                disabled
                name="name"
                type="name"
                placeholder="Name *"
                value={data && data.email}
                sx={{
                  width: "100%",
                  backgroundColor: "#34353C",
                }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Mot de passe:</Typography>
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                id="password"
                margin="normal"
                required
                fullWidth
                label="password"
                name="password"
                placeholder="Mot de passe"
                autoComplete="password"
                type="password"
                startAdornment={<LockIcon />}
                sx={{
                  width: "100%",
                  backgroundColor: "#34353C",
                }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Nouveau mot de passe:</Typography>
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                id="confirmpassword"
                margin="normal"
                required
                fullWidth
                label="password"
                name="confirmpassword"
                placeholder="Confirmer Mot de passe"
                autoComplete="password"
                type="password"
                startAdornment={<LockIcon />}
                sx={{
                  width: "100%",
                  backgroundColor: "#34353C",
                }}
              />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <CustomButton
                variant="contained"
                color={"purple"}
                loading={loading}
                onClick={() => updateProfilPicture()}
              >
                Enregister les modifications
              </CustomButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default Profil;

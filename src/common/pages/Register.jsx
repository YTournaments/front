import { useState, useMemo } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";
import { useAlertContext } from "../hooks/useAlertContext";
import { useRoleContext } from "../hooks/useRoleContext";
import useAxios from "../hooks/useAxios";

import { verifyDataForm } from "../utils";
import axios from "../api/index";
import CustomTextField from "../components/Input/TextField";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { viewPassword } from "../utils";
import Logo from "../../assets/android-chrome-192x192.png";
import CustomButton from "../components/Button/Button";

const Register = () => {
  const navigate = useNavigate();
  const [nameErrText, setnameErrText] = useState("");
  const [emailErrText, setEmailErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState("");
  const [response, data, error, loading, axiosFetch] = useAxios();
  const { dispatch: dispatchAuth } = useAuthContext();
  const { dispatch: dispatchRole } = useRoleContext();
  let { setAlert } = useAlertContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setnameErrText("");
    setPasswordErrText("");
    setConfirmPasswordErrText("");
    setEmailErrText("");

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const confirmPassword = e.target.confirmPassword.value.trim();

    const isEmpty = () => {
      let error = true;
      verifyDataForm(name)
        ? setnameErrText("")
        : setnameErrText("Veulliez remplir ce champ");
      verifyDataForm(email)
        ? setEmailErrText("")
        : setEmailErrText("Veulliez remplir ce champ");
      verifyDataForm(password)
        ? setPasswordErrText("")
        : setPasswordErrText("Veulliez remplir ce champ");
      verifyDataForm(confirmPassword)
        ? setConfirmPasswordErrText("")
        : setConfirmPasswordErrText("Veulliez remplir ce champ");
      if (confirmPassword === password) {
        setConfirmPasswordErrText("");
      } else {
        setConfirmPasswordErrText("Les mots de passe ne correspondent pas");
        setPasswordErrText("Les mots de passe ne correspondent pas");
      }
      if (
        verifyDataForm(name) &&
        verifyDataForm(email) &&
        verifyDataForm(password) &&
        verifyDataForm(confirmPassword) &&
        confirmPassword === password
      ) {
        error = false;
      }
      return error;
    };
    if (isEmpty()) {
      return;
    }
    axiosFetch({
      axiosInstance: axios,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "post",
      url: "/user/register",
      requestConfig: {
        data: {
          name: name,
          email: email,
          password: password,
        },
      },
    });
  };

  useMemo(() => {
    if (response) {
      const json = response.data;
      console.log(response);
      localStorage.setItem("user", data.token);
      dispatchAuth({ type: "LOGIN", payload: json });
      dispatchRole({ type: "SET_ROLE", payload: json.role });
      setAlert("Bienvenue sur Ytournaments", "info");
      return navigate("/home");
    }
  }, [response]);

  useMemo(() => {
    if (error) {
      const json = error.response.data;
      console.log(error);
      if (
        json.statusCode === 401 ||
        json.statusCode === 403 ||
        json.statusCode === 500
      ) {
        // console.log(error);
        setAlert("Une erreur est survenue", "error");
      }
    }
  }, [error]);

  return (
    <>
      <Card
        sx={{
          borderRadius: "20px",
          backgroundColor: "darkBlue.main",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          margin: "auto",
          maxWidth: "678px",
          maxHeight: "668px",
          marginTop: "10%",
        }}
      >
        <CardMedia
          component="img"
          image={Logo}
          sx={{
            width: "100px",
            height: "100px",
            margin: "auto",
            marginTop: "20px",
          }}
          alt="logo"
        />
        <CardContent>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              margin: "auto",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Inscription
          </Typography>
          <Box
            component="form"
            sx={{ mt: 1, height: "100vh" }}
            onSubmit={handleSubmit}
            noValidate
          >
            <CustomTextField
              id="name"
              margin="normal"
              required
              fullWidth
              label="name"
              type="text"
              name="name"
              placeholder="Pseudo"
              autoComplete="name"
              disabled={loading ? true : false}
              error={nameErrText !== ""}
              helperText={nameErrText}
              sx={{
                backgroundColor: "#34353C",
                maxWidth: "50%",
                margin: "auto",
                display: "flex",
                marginTop: "30px",
              }}
              startAdornment={<PersonIcon />}
            />
            <CustomTextField
              id="email"
              margin="normal"
              required
              fullWidth
              label="email"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              disabled={loading}
              error={emailErrText !== ""}
              helperText={emailErrText}
              sx={{
                backgroundColor: "#34353C",
                maxWidth: "50%",
                margin: "auto",
                display: "flex",
                marginTop: "30px",
              }}
              startAdornment={<EmailIcon />}
            />
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
              disabled={loading}
              error={passwordErrText !== ""}
              helperText={passwordErrText}
              sx={{
                backgroundColor: "#34353C",
                maxWidth: "50%",
                margin: "auto",
                display: "flex",
                marginTop: "30px",
              }}
              startAdornment={<LockIcon />}
              endAdornment={
                <VisibilityIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    viewPassword();
                  }}
                />
              }
            />
            <CustomTextField
              id="confirmPassword"
              margin="normal"
              required
              fullWidth
              label="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmer le mot de passe"
              autoComplete="confirmPassword"
              type="password"
              disabled={loading}
              error={confirmPasswordErrText !== ""}
              helperText={confirmPasswordErrText}
              sx={{
                backgroundColor: "#34353C",
                maxWidth: "50%",
                margin: "auto",
                display: "flex",
                marginTop: "30px",
              }}
              startAdornment={<LockIcon />}
              endAdornment={
                <VisibilityIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    viewPassword();
                  }}
                />
              }
            />
            <CustomButton
              sx={{
                maxWidth: "30%",
                display: "flex",
                margin: "auto",
                marginTop: "50px",
              }}
              variant="outlined"
              fullWidth
              color="purple"
              type="submit"
              loading={loading ? true : false}
            >
              S’inscrire
            </CustomButton>

            <Typography
              component={Link}
              to="/login"
              sx={{
                textTransform: "none",
                textDecoration: "none",
                color: "white",
                textAlign: "center",
                alignContent: "center",
                margin: "auto",
                display: "block",
                fontSize: "12px",
                marginTop: "40px",
              }}
            >
              Vous avez un compte ? Se Connecter
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Register;

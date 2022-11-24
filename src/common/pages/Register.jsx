import { Box, Button, TextField } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useRegister } from "../hooks/useRegister";
import { verifyDataForm } from "../utils";
import useAxios from "../hooks/useAxios";
import axios from "../api/index";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAlertContext } from "../hooks/useAlertContext";
const Register = () => {
  const navigate = useNavigate();
  const [nameErrText, setnameErrText] = useState("");
  const [emailErrText, setEmailErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState("");
  const [response, data, error, loading, axiosFetch] = useAxios();
  const { dispatch } = useAuthContext();
  let { setAlert } = useAlertContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setnameErrText("");
    setPasswordErrText("");
    setConfirmPasswordErrText("");
    setEmailErrText("");

    const data = new FormData(e.target);
    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const password = data.get("password").trim();
    const confirmPassword = data.get("confirmPassword").trim();

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
      dispatch({ type: "LOGIN", payload: json });
      setAlert("Bienvenur sur Ytournaments", "info");
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
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="name"
          name="name"
          disabled={loading}
          error={nameErrText !== ""}
          helperText={nameErrText}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="email"
          name="email"
          disabled={loading}
          error={emailErrText !== ""}
          helperText={emailErrText}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          disabled={loading}
          error={passwordErrText !== ""}
          helperText={passwordErrText}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          disabled={loading}
          error={confirmPasswordErrText !== ""}
          helperText={confirmPasswordErrText}
        />
        <Button
          sx={{ mt: 3, mb: 2 }}
          variant="outlined"
          fullWidth
          color="success"
          type="submit"
          loading={loading}
        >
          Register
        </Button>
      </Box>
      <Button component={Link} to="/login" sx={{ textTransform: "none" }}>
        Already have an account? Login
      </Button>
    </>
  );
};

export default Register;

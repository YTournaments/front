import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";

import { useAlertContext } from "../hooks/useAlertContext";
import { useAuthContext } from "../hooks/useAuthContext";
import useAxios from "../hooks/useAxios";

import { verifyDataForm } from "../utils";
import axios from "../api/index";
const Login = () => {
  const navigate = useNavigate();

  const [emailErrText, setEmailErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [response, data, error, loading, axiosFetch] = useAxios();
  const { dispatch } = useAuthContext();
  const { setAlert } = useAlertContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailErrText("");
    setPasswordErrText("");

    const data = new FormData(e.target);
    const email = data.get("email").trim();
    const password = data.get("password").trim();

    const isEmpty = () => {
      let error = true;
      verifyDataForm(email)
        ? setEmailErrText("")
        : setEmailErrText("Veulliez remplir ce champ");
      verifyDataForm(password)
        ? setPasswordErrText("")
        : setPasswordErrText("Veulliez remplir ce champ");

      if (verifyDataForm(email) && verifyDataForm(password)) {
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
      url: "/user/login",
      requestConfig: {
        data: {
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
      setAlert("Vous etes connecté ", "success");
      return navigate("/home");
    }
  }, [response]);

  useMemo(() => {
    if (error) {
      const json = error.response;
      if (json.status === 401 || json.status === 403 || json.status === 500) {
        setAlert("Une erreur est survenue", "error");
      }
    }
  }, [error]);

  return (
    <>
      <Box
        component="form"
        sx={{ mt: 1, height: "100vh" }}
        onSubmit={handleSubmit}
        noValidate
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="email"
          name="email"
          disabled={loading ? true : false}
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
          disabled={loading ? true : false}
          error={passwordErrText !== ""}
          helperText={passwordErrText}
        />
        <Button
          sx={{ mt: 3, mb: 2 }}
          variant="outlined"
          fullWidth
          color="success"
          type="submit"
          loading={loading ? true : false}
        >
          Conexion
        </Button>
        <Button component={Link} to="/register" sx={{ textTransform: "none" }}>
          Vous n'avez pas de compte ? S'enregister
        </Button>
      </Box>
    </>
  );
};

export default Login;

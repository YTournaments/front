import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { verifyDataForm } from "../utils";
const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [emailErrText, setEmailErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const { login, error, isLoading } = useLogin();
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

    setLoading(true);

    try {
      setLoading(false);
      await login(email, password);
      navigate("/home");
    } catch (err) {
      /*  const errors = err.data.errors;
      errors.forEach((e) => {
        if (e.param === "username") {
          setUsernameErrText(e.msg);
        }
        if (e.param === "password") {
          setPasswordErrText(e.msg);
        }
      }); */
      setLoading(false);
    }
  };

  return (
    <>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
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
        <Button
          sx={{ mt: 3, mb: 2 }}
          variant="outlined"
          fullWidth
          color="success"
          type="submit"
          loading={loading}
        >
          Login
        </Button>
      </Box>
      <Button component={Link} to="/signup" sx={{ textTransform: "none" }}>
        Don't have an account? Signup
      </Button>
    </>
  );
};

export default Login;

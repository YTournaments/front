import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { verifyDataForm } from "../utils";
const Signup = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState();
  const [nameErrText, setnameErrText] = useState("");
  const [emailErrText, setEmailErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
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
    setLoading(true);

    try {
      setLoading(false);
      await signup(name, email, password);

      if (!error && !isLoading) {
        navigate("/home");
      }
    } catch (err) {}
  };
  /*    const errors = err.data.errors;
      console.log(errors);
      errors.forEach((e) => {
        if (e.param === "name") {
          setnameErrText(e.msg);
        }
        if (e.param === "password") {
          setPasswordErrText(e.msg);
        }
        if (e.param === "email") {
          setEmailErrText(e.msg);
        }
        if (e.param === "confirmPassword") {
          setConfirmPasswordErrText(e.msg);
        }
      });
      setLoading(false);
    }
  }; */

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
          Signup
        </Button>
      </Box>
      <Button component={Link} to="/login" sx={{ textTransform: "none" }}>
        Already have an account? Login
      </Button>
    </>
  );
};

export default Signup;

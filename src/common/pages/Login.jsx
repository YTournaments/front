import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Logo from "@/assets/android-chrome-192x192.png";
import { useAlertContext } from "@/common/hooks/useAlertContext";
import { useAuthContext } from "@/common/hooks/useAuthContext";
import { useRoleContext } from "@/common/hooks/useRoleContext";
import useAxios from "@/common/hooks/useAxios";
import CustomButton from "@/common/components/Button/Button";
import { verifyDataForm } from "@/common/utils";
import axios from "@/common/api/index";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockIcon from "@mui/icons-material/Lock";
import CustomTextField from "@/common/components/Input/TextField";
import { viewPassword } from "@/common/utils";

const Login = () => {
  const navigate = useNavigate();

  const [emailErrText, setEmailErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [response, data, error, loading, axiosFetch] = useAxios();
  const { dispatch: dispatchAuth } = useAuthContext();
  const { dispatch: dispatchRole } = useRoleContext();
  const { setAlert } = useAlertContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailErrText("");
    setPasswordErrText("");

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

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
      url: "api/v1/users/login",
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
      localStorage.setItem("user", data.token);
      dispatchAuth({ type: "LOGIN" });
      dispatchRole({ type: "SET_ROLE" });

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
    <Box
      sx={{
        display: "flex",
        marginTop: "10vh",
        width: "100%",
      }}
    >
      <Card
        sx={{
          borderRadius: "20px",
          backgroundColor: "darkBlue.main",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          margin: "auto",
          minWidth: "20rem",
          width: 678,
          height: 600,
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
            Connexion
          </Typography>

          <Box
            component="form"
            sx={{ mt: 1, height: "100vh" }}
            onSubmit={handleSubmit}
            noValidate
          >
            <CustomTextField
              id="email"
              margin="normal"
              required
              fullWidth
              name="email"
              type="email"
              label="email"
              autoComplete="email"
              placeholder="Email *"
              error={emailErrText !== ""}
              helperText={emailErrText}
              sx={{
                backgroundColor: "#34353C",
                maxWidth: {
                  xs: "90%",
                  sm: "50%",
                  md: "50%",
                  lg: "50%",
                },
                margin: "auto",
                display: "flex",
                marginTop: "20px",
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
              autoComplete="password"
              type="password"
              placeholder="Mot de passe *"
              error={passwordErrText !== ""}
              helperText={passwordErrText}
              sx={{
                backgroundColor: "#34353C",
                maxWidth: {
                  xs: "90%",
                  sm: "50%",
                  md: "50%",
                  lg: "50%",
                },
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
            >
              Conexion
            </CustomButton>
            <Typography
              component={Link}
              to="/auth/register"
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
              Vous n'avez pas de compte ? Inscrivez vous maintenant
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;

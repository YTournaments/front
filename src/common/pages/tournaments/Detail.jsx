import { Box, Typography, Card, CardContent, Chip } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomTextField from "@/common/components/Input/TextField";
import CustomButton from "@/common/components/Button/Button";
import { CheckBox } from "@mui/icons-material";
import useAxios from "@/common/hooks/useAxios";
import axios from "@/common/api/index";
import { useLocation, useNavigate } from "react-router-dom";
const Detail = () => {
  const [response, data, error, loading, axiosFetch] = useAxios();
  const [nameErrText, setNameErrText] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const getDetail = () => {
    axiosFetch({
      axiosInstance: axios,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      method: "get",
      url: `api/v1/tournaments/${location.state.tournamentId}`,
    });
  };

  const startTournament = () => {
    axiosFetch({
      axiosInstance: axios,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      method: "post",
      url: `api/v1/brackets?tournament_id=${data._id}`,
      requestConfig: {
        data: {
          title: data.name,
          tournament_id: data._id,
          players: data.participants,
        },
      },
    });
  };
  useEffect(() => {
    getDetail();
  }, []);
  console.log(data);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        height: "80vh",
        flexDirection: "row",
      }}
    >
      <Card
        sx={{
          overflow: "auto",
          backgroundColor: "darkBlue.main",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          width: "80%",
          height: " 80%",
          margin: "8px",
          padding: "2rem",

          borderRadius: "2rem",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">{data.name}</Typography>

        <Typography color="primary">
          Le tournois debute le : {data.start_date?.slice(0, 10)}
        </Typography>

        <Typography>Créateur :</Typography>
        <Typography
          sx={{
            textAlign: "center",
            margin: "2rem",
          }}
        >
          {data.description}
        </Typography>
        <Typography variant="h6">Nombre de participant</Typography>
        <Chip
          label={`${data.participants?.length} / ${data.max_players}`}
          color="primary"
        />
        <Typography variant="h6">Plateform</Typography>
        <Chip label="PC" color="secondary" />
      </Card>

      <Card
        sx={{
          overflow: "auto",
          backgroundColor: "darkBlue.main",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          width: "80%",
          height: " 80%",
          margin: "8px",
          padding: "2rem",
          borderRadius: "2rem",
          textAlign: "center",
        }}
      >
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
            Formulaire de participation
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              margin: "2rem",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            facilis optio earum quo temporibus labore veritatis dignissimos
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomTextField
              id="nom"
              margin="normal"
              required
              fullWidth
              name="nom"
              type="name"
              label="nom"
              autoComplete="nom"
              placeholder="Nom *"
              autoFocus
              error={nameErrText !== ""}
              helperText={nameErrText}
              sx={{
                backgroundColor: "#34353C",
                maxWidth: "50%",
                margin: "auto",
                display: "flex",
                marginTop: "20px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                margin: "1rem",
              }}
            >
              <CheckBox sx={{ color: "secondary" }} />
              <Typography sx={{ margin: " 0 1rem" }}>
                J'ai lu et j'accepte les conditions générales
              </Typography>
            </Box>
            <CustomButton
              type="submit"
              sx={{
                margin: "1rem",
              }}
              variant="contained"
              color="purple"
            >
              Participer
            </CustomButton>
          </Box>
        </CardContent>
        <Typography>
          SI tournois est en cours, tu peux voir le brackets ici
        </Typography>
        <CustomButton
          onClick={() =>
            navigate(`/tournament/${data._id}`, { state: { tournament: data } })
          }
          sx={{ margin: "auto" }}
          variant="contained"
          color="purple"
        >
          Brackets
        </CustomButton>
        <Typography>
          SI tu es le créateur du tournois, tu peux le lancer ici
        </Typography>
        <CustomButton
          onClick={() => startTournament()}
          sx={{ margin: "auto" }}
          variant="contained"
          color="primary"
        >
          Lancer
        </CustomButton>
      </Card>
    </Box>
  );
};

export default Detail;

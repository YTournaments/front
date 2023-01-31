import { Box, Typography, Card, CardContent, Chip, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomTextField from "@/common/components/Input/TextField";
import CustomButton from "@/common/components/Button/Button";

import useAxios from "@/common/hooks/useAxios";
import axios from "@/common/api/index";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const [response, data, error, loading, axiosFetch] = useAxios();
  const [creator, setCreator] = useState("");
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
          status: "Scheduled",
          tournament_id: data._id,
          players: data.participants,
        },
      },
    });
  };

  const isCreator = () => {
    axios({
      method: "get",
      url: "api/v1/users/profil",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    }).then((response) => {
      setCreator(response.data.name);
    });
  };

  useEffect(() => {
    getDetail();
    isCreator();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      <Card
        sx={{
          backgroundColor: "darkBlue.main",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          padding: "2rem",
          minWidth: "10rem",
          width: "100%",
          border: "1px solid #FFF",
          borderRadius: "2rem",
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            fontWeight: "bold",
            my: "2rem",
          }}
        >
          Participez au tournoi !
        </Typography>
        <Typography variant="h5">{data.name}</Typography>

        <Typography color="primary">
          Le tournois debute le : {data.start_date?.slice(0, 10)}
        </Typography>

        <Typography>Créateur : {data?.creator} </Typography>
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
        <Typography variant="h6">Plateforme</Typography>
        <Chip label="PC" color="default" />
        <Box>
          <CustomButton
            type="submit"
            //disabled={data.participants?.length >= data.max_players}
            disabled={true}
            sx={{
              margin: "1rem",
            }}
            variant="contained"
            color="purple"
          >
            Rejoindre le tournois
          </CustomButton>
          {data?.start_date <= new Date().toISOString() ? (
            <CustomButton
              onClick={() =>
                navigate(`/tournament/${data._id}`, {
                  state: { tournament: data },
                })
              }
              sx={{ margin: "1rem" }}
              variant="contained"
              color="purple"
            >
              Voir le tournois
            </CustomButton>
          ) : (
            <CustomButton
              sx={{ margin: "auto" }}
              variant="contained"
              color="purple"
            >
              Le tournois n'a pas encore commencé
            </CustomButton>
          )}
        </Box>
        {data.creator === creator && (
          <Box
            sx={{
              display: "flex",
              position: "relative",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              border: "1px solid red",
              padding: "2rem",
              width: { xs: "100%", md: "50%" },
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                py: "1rem",
              }}
            >
              Zone organisation du tournois
            </Typography>
            <Typography>Voir le bracket du tournois</Typography>
            <CustomButton
              onClick={() =>
                navigate(`/tournament/${data._id}`, {
                  state: { tournament: data },
                })
              }
              sx={{ margin: "auto" }}
              variant="contained"
              color="purple"
            >
              Brackets
            </CustomButton>

            <Typography>Lancer le tournois</Typography>
            <CustomButton
              onClick={() => startTournament()}
              sx={{ margin: "auto" }}
              variant="contained"
              color="primary"
            >
              Lancer
            </CustomButton>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default Detail;

import { Box, Typography, Card, CardContent, Chip, Grid } from "@mui/material";
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

        <Typography>Créateur : </Typography>
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
        <Chip label="PC" color="default" />
        <Box>
          <CustomButton
            type="submit"
            sx={{
              margin: "1rem",
            }}
            variant="contained"
            color="purple"
          >
            Rejoindre le tournois
          </CustomButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            border: "1px solid red",
            padding: "2rem",
            width: "50%",
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
          <Typography>
            Voir le bracket du tournois en cliquant sur le bouton ci dessous
          </Typography>
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

          <Typography>
            Lancer le tournois en cliquant sur le bouton ci dessous
          </Typography>
          <CustomButton
            onClick={() => startTournament()}
            sx={{ margin: "auto" }}
            variant="contained"
            color="primary"
          >
            Lancer
          </CustomButton>
        </Box>
      </Card>

      {/* <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid white",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              border: "1px solid white",
            }}
          >
            <Card
              sx={{
                overflow: "auto",
                backgroundColor: "darkBlue.main",
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                padding: "2rem",
                width: "100%",

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
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card
              sx={{
                overflow: "auto",
                backgroundColor: "darkBlue.main",
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                width: "100%",
                padding: "2rem",

                borderRadius: "2rem",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Participez au tournois !
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    margin: "2rem",
                  }}
                ></Typography>

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
              </CardContent>
              <Typography>
                SI tournois est en cours, tu peux voir le brackets ici
              </Typography>
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
              <Box
                sx={{
                  display: "flex",

                  justifyContent: "center",
                  margin: "1rem",
                }}
              >
                <CheckBox sx={{ color: "secondary" }} />
                <Typography sx={{ margin: " 0 1rem" }}>
                  En cochant cette case , vous accepetez la politique de
                  confidentialité
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid> */}
    </Box>
  );
};

export default Detail;

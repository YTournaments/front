import React, { useEffect } from "react";
import { Box, Typography, Card } from "@mui/material";
import useAxios from "../../hooks/useAxios";
import axios from "../../api/index";
import { useNavigate } from "react-router-dom";
const Tournaments = () => {
  const [response, data, error, loading, axiosFetch] = useAxios();
  const navigate = useNavigate();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      method: "get",
      url: "/tournaments",
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ mt: 1, height: "100vh" }}>
      <Typography component="h1" variant="h4">
        Tournaments
      </Typography>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && (
        <>
          {data.map((tournament) => (
            <Card
              key={tournament._id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
                margin: "1rem",
                borderRadius: "1rem",
                boxShadow: "0 0 20px 0 rgba(0,0,0,0.2)",
              }}
              onClick={() =>
                navigate(`/tournament/${tournament._id}`, {
                  state: { tournament },
                })
              }
            >
              <Typography>{tournament.name}</Typography>
              <Typography>{tournament.description}</Typography>
              <Typography>{tournament.start_date}</Typography>
              <Typography>{tournament.end_date}</Typography>
              <Typography>{tournament.status}</Typography>
              <Typography>{tournament.prize} €</Typography>
            </Card>
          ))}
        </>
      )}
    </Box>
  );
};

export default Tournaments;

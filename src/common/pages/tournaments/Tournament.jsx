import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { BracketGame } from "@/common/components/Bracket/Bracket";
import useAxios from "@/common/hooks/useAxios";
import axios from "@/common/api/index";
import CustomButton from "@/common/components/Button/Button";
import { useLocation } from "react-router-dom";
const Tournament = () => {
  const [response, data, error, loading, axiosFetch] = useAxios();
  const location = useLocation();
  const { tournament } = location.state;

  const getBracket = () => {
    axiosFetch({
      axiosInstance: axios,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      method: "get",
      url: "api/v1/brackets" + `/${tournament._id}`,
    });
  };

  useEffect(() => {
    getBracket();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && error && (
        <p>
          {error.message} <br />
        </p>
      )}
      {!loading && !error && (
        <Box sx={{ mt: 1 }}>
          {data.seeds !== undefined || [] || null ? (
            <BracketGame
              bracket={data}
              onMatchClick={(match) => console.log(match)}
            />
          ) : (
            <CustomButton>Generer le tournois</CustomButton>
          )}
        </Box>
      )}
    </>
  );
};

export default Tournament;

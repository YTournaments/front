import React from "react";
import { Box } from "@mui/material";
import { BracketGame } from "@/common/components/Bracket/Bracket";
import { useLocation } from "react-router-dom";
const Tournament = () => {
  const location = useLocation();
  const { id, participants } = location.state.tournament;

  return <BracketGame participants={participants} />;
};

export default Tournament;

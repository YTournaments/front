import React from "react";
import { useLocation } from "react-router-dom";
const ManageTournament = () => {
  const location = useLocation();
  const { tournament } = location.state;

  return (
    <div>
      <h1>Manage Tournament</h1>
      <p>{tournament.name}</p>
    </div>
  );
};

export default ManageTournament;

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader,
  Grid,
  Slider,
  Input,
  OutlinedInput,
  Paper,
  Chip,
  ListItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { grey, yellow } from "@mui/material/colors";

const CreateTournament = () => {
  const [loading, setloading] = useState(false);
  const [startdate, setStartDate] = React.useState(new Date());
  const names = ["PC", "XBOX", "PS4", "Nintendo Switch", "Mobile", "Other"];
  const [platformTournament, setplatformTournament] = React.useState([]);
  const handlePlatformChange = (event) => {
    const {
      target: { value },
    } = event;
    setplatformTournament(typeof value === "string" ? value.split(",") : value);
  };
  const handleChange = (newValue) => {
    setStartDate(newValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const name = data.get("name");
    const description = data.get("description");
    const game = data.get("game");
    const start_date = startdate;
    const max_players = data.get("maxPlayers");
    const prize = data.get("cashPrice");
    const rules = data.get("rules");
    const platform = platformTournament;
    const participants = data
      .get("team")
      .trim("")
      .split("\n")
      .map((team) => {
        return { name: team };
      });
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");
    const dataTournaments = {
      name,
      description,
      game,
      start_date,
      max_players,
      prize,
      rules,
      platform,
      participants,
      password,
      confirmPassword,
    };

    console.log(dataTournaments);
    fetch("http://localhost:5000/tournaments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      body: JSON.stringify(dataTournaments),
    });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Créer votre tournois
      </Typography>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          id="name"
          label="Nom du tournois"
          name="name"
          disabled={loading}
        />
        <TextField
          fullWidth
          sx={{ mt: 1 }}
          rows={4}
          id="description"
          label="Description"
          name="description"
          disabled={loading}
          multiline
        />

        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel htmlFor="game-select">Game</InputLabel>
          <Select
            defaultValue=""
            id="game"
            label="Game"
            name="game"
            disabled={loading}
          >
            <MenuItem value="">
              <em>PLease select game</em>
            </MenuItem>
            <ListSubheader>SPORT</ListSubheader>
            <MenuItem value={1}>Aqua poney</MenuItem>
            <MenuItem value={2}>Ping Pong</MenuItem>
            <ListSubheader>E-SPORT</ListSubheader>
            <MenuItem value={3}>Csgo</MenuItem>
            <MenuItem value={4}>Rocket League</MenuItem>
          </Select>
        </FormControl>
        <DatePicker
          label="date"
          id="date"
          name="date"
          value={startdate}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

        <TextField
          fullWidth
          sx={{ mt: 1 }}
          rows={4}
          id="maxPlayers"
          label="Max Players"
          name="maxPlayers"
          disabled={loading}
        />
        <TextField
          fullWidth
          sx={{ mt: 1 }}
          id="cashPrice"
          label="Cash Price"
          name="cashPrice"
          disabled={loading}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          sx={{ mt: 1 }}
          id="rules"
          label="Règles"
          name="rules"
          disabled={loading}
        />
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel>Plateforme</InputLabel>
          <Select
            labelId="platform-select-label"
            id="platform"
            multiple
            value={platformTournament}
            onChange={handlePlatformChange}
            input={
              <OutlinedInput id="select-multiple-plateform" label="Chip" />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          multiline
          multiple
          sx={{ mt: 1 }}
          rows={4}
          id="team"
          placeholder="ex: TEAM 1"
          label="Equipe/Joueur"
          name="team"
          disabled={loading}
        />
        <TextField
          fullWidth
          sx={{ mt: 1 }}
          id="password"
          label="Mot de passe"
          name="password"
          disabled={loading}
        />
        <TextField
          fullWidth
          sx={{ mt: 1 }}
          id="confirmPassword"
          label="Confirmer mot de passe"
          name="confirmPassword"
          disabled={loading}
        />

        <Button type="submit" variant="contained" sx={{ mt: 1 }}>
          Créer
        </Button>
      </Box>
    </>
  );
};

export default CreateTournament;

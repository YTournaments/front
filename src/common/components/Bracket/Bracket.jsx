import {
  Bracket,
  Seed,
  SeedItem,
  SeedTeam,
  SingleLineSeed,
} from "react-brackets";
import { Box, Container } from "@mui/material";
import { purple, yellow } from "../../../colors";
import { useNavigate } from "react-router-dom";

export const BracketGame = ({ bracket }) => {
  const rounds = bracket.seeds ? bracket.seeds : [];

  const CustomSeed = ({ seed, title, breakpoint, roundIndex, seedIndex }) => {
    const navigate = useNavigate();
    const [home, away] = seed.teams;
    if (seed.teams !== undefined || seed.teams !== null || seed.teams !== "") {
      return (
        <Seed
          mobileBreakpoint={breakpoint}
          style={{ fontSize: 14, fontWeight: "bold" }}
        >
          <SeedItem
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              console.log(seed);
              if (seed.id !== undefined && seed.id !== null) {
                navigate(`/match/${seed.id}`, {
                  state: {
                    home: home,
                    away: away,
                    roundIndex: roundIndex,
                    seedIndex: seedIndex,
                  },
                });
              }
            }}
          >
            <div>
              <SeedTeam
                style={{
                  backgroundColor: yellow[100],
                  color: "black",
                }}
              >
                <div>{home.name}</div>
                <div>{home.score}</div>
              </SeedTeam>
              <SeedTeam
                style={{
                  backgroundColor: purple[100],
                  fontWeight: "bold",
                }}
              >
                <div>{away.name}</div>
                <div>{away.score}</div>
              </SeedTeam>
            </div>
          </SeedItem>
        </Seed>
      );
    }
  };
  return (
    <Container
      sx={{
        display: "flex",
        width: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {bracket.seeds ? (
          <Bracket
            rounds={rounds}
            renderSeedComponent={CustomSeed}
            swipeableProps={{
              enableMouseEvents: true,
              animateHeight: true,
            }}
          />
        ) : (
          <div>Chargement...</div>
        )}
      </Box>
    </Container>
  );
};

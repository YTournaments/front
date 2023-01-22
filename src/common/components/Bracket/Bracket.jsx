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
            onClick={() => {
              // console.log(seed);
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
              <Box
                sx={{
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  borderBottom: "1px solid #FFF",
                }}
              >
                <div
                  style={{
                    width: "80%",
                  }}
                >
                  {home.name}
                </div>

                <div
                  style={{
                    width: "20%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: purple[100],
                  }}
                >
                  {home.score}
                </div>
              </Box>
              <Box
                sx={{
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <div
                  style={{
                    width: "80%",
                  }}
                >
                  {away.name}
                </div>

                <div
                  style={{
                    width: "20%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: yellow[100],
                  }}
                >
                  {away.score}
                </div>
              </Box>
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

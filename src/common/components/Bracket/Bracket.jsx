import generator from "tournament-generator";
import _ from "lodash";
import {
  Bracket,
  Seed,
  SeedItem,
  SeedTeam,
  SingleLineSeed,
} from "react-brackets";
import { Box, Container } from "@mui/material";
import { indigo, purple, yellow } from "../../../colors";
import { useNavigate } from "react-router-dom";
export const BracketGame = ({ participants }) => {
  const checkValues = (number) => {
    if (number === 1) return 1;
    const newValue = number / 2;

    if (newValue === 1) {
      return 1;
    }

    return checkValues(newValue) + 1;
  };

  const player = [
    { name: "team A", category: "test" },
    { name: "team B", category: "test" },
    { name: "team C", category: "test" },
    { name: "team D", category: "test" },
    { name: "team E", category: "test" },
    { name: "team F", category: "test" },
    { name: "team G", category: "test" },
    { name: "team H", category: "test" },
    { name: "team I", category: "test" },
    { name: "team J", category: "test" },
    { name: "team I", category: "test" },
    { name: "team J", category: "test" },
    { name: "team I", category: "test" },
    { name: "team J", category: "test" },
    { name: "team I", category: "test" },
    { name: "team J", category: "test" },
    { name: "team J", category: "test" },
  ];
  const players = participants.map((participant) => {
    return {
      name: participant.name,
      category: "test",
    };
  });

  const { data: games } = generator(players, {
    type: "simple-cup",
    toBeDefinedValue: "-----",
  });

  const tournamentGames = _.groupBy(games, "round");

  const days = Object.keys(tournamentGames).map((day) => {
    const dayMatchs = tournamentGames[day];
    return {
      title: `Round  ${day}`,
      seeds: dayMatchs.map((match) => {
        const home =
          match.homeTeam === "-----"
            ? { name: match.homeTeam }
            : match.homeTeam;
        const away =
          match.awayTeam === "-----"
            ? { name: match.awayTeam }
            : match.awayTeam;
        const teams = [
          {
            ...home,
            id: match.customData?.homeTeam ? match.customData.homeTeam : "",
          },
          {
            ...away,
            id: match.customData?.awayTeam ? match.customData.awayTeam : "",
          },
        ];
        return {
          id: match.id,
          teams,
        };
      }),
    };
  });

  if (days.length > 1 && days[0].seeds.length < days[1].seeds.length * 2) {
    const emptyMatches = days[1].seeds.length * 2 - days[0].seeds.length;
    for (let i = 0; i < emptyMatches; i++) {
      days[0].seeds.push({
        id: `empty-${i}`,
        teams: [
          {
            name: "-----",
          },
          {
            name: "-----",
          },
        ],
      });
    }
  }

  const missings = checkValues(days[days.length - 1].seeds.length);

  const finals = Array.from({ length: missings }, (x, i) => Math.pow(2, i))
    .reverse()
    .map((seeds, index) => {
      const lastDay = days.length + index;
      return {
        title: `Round ${lastDay + 1}`,
        seeds: Array.from({ length: seeds }).map((m, idx) => {
          const prevMatch = lastDay > days.length ? false : days[lastDay - 1];

          return {
            id: `MS${index}${idx}`,
            teams: [
              {
                name: "----",
                id: prevMatch.seeds
                  ? prevMatch.seeds[2 * index].id
                  : `MS${index - 1}${2 * idx}`,
              },
              {
                name: "-----",
                id: prevMatch.seeds
                  ? prevMatch.seeds[2 * index + 1].id
                  : `MS${index - 1}${2 * idx + 1}`,
              },
            ],
          };
        }),
      };
    });

  const rounds = [...days, ...finals];
  const CustomSeed = ({ seed, title, breakpoint, roundIndex, seedIndex }) => {
    const navigate = useNavigate();
    console.log(seed);
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
        <Bracket
          rounds={rounds}
          renderSeedComponent={CustomSeed}
          swipeableProps={{
            enableMouseEvents: true,
            animateHeight: true,
          }}
        />
      </Box>
    </Container>
  );
};

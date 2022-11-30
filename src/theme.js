import { createTheme } from "@mui/material/styles";
import { yellow, indigo, blue, black, purple } from "./colors";
export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: yellow[100],
      dark: yellow[200],
    },
    secondary: {
      main: indigo[100],
      dark: indigo[200],
    },
    purple: {
      main: purple[100],
      dark: purple[200],
    },
    info: {
      main: blue[100],
      dark: blue[200],
    },
    tertiary: {
      main: black[100],
      dark: black[200],
    },
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

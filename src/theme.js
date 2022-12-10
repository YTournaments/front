import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { yellow, indigo, blue, black, purple, darkBlue } from "./colors";

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
    darkBlue: {
      main: darkBlue[100],
      dark: darkBlue[200],
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

export const responsiveTheme = responsiveFontSizes(theme);

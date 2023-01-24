import Router from "./routes";
import CssBaseLine from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";
import { responsiveTheme } from "./theme";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AlertPopup from "./common/components/Popup/AlertPopup";

import "./App.css";
function App() {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseLine>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <AlertPopup />
          <Router />
        </LocalizationProvider>
      </CssBaseLine>
    </ThemeProvider>
  );
}

export default App;

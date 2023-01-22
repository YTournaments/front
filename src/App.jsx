import Router from "./routes";
import CssBaseLine from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";
import { responsiveTheme } from "./theme";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { BrowserRouter } from "react-router-dom";
// import AlertPopup from "@/common/components/AlertPopup";

import "./App.css";
function App() {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseLine>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          {/* <AlertPopup /> */}
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </LocalizationProvider>
      </CssBaseLine>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseLine from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./common/layout/AppLayout";
import AuthLayout from "./common/layout/AuthLayout";
import Landing from "./common/pages/Landing";
function App() {
  const theme = createTheme({
    palette: { mode: "light" },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route path="landing" element={<Landing />} />
            </Route>
            <Route path="/" element={<AppLayout />}></Route>
          </Routes>
        </BrowserRouter>
      </CssBaseLine>
    </ThemeProvider>
  );
}

export default App;

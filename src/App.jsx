import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseLine from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./common/layout/AppLayout";
import AuthLayout from "./common/layout/AuthLayout";
import Landing from "./common/pages/Landing";
import Signup from "./common/pages/Signup";
import Login from "./common/pages/Login";
import Home from "./common/pages/Home";

function App() {
  const theme = createTheme({
    palette: { mode: "light" },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="/app/" element={<AppLayout />}>
              <Route path="home" element={<Home />} />
            </Route>
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </CssBaseLine>
    </ThemeProvider>
  );
}

export default App;

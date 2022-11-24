import { ThemeProvider } from "@mui/material/styles";
import CssBaseLine from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./common/layout/AppLayout";
import AuthLayout from "./common/layout/AuthLayout";
import AdminLayout from "./common/layout/AdminLayout";
import Landing from "./common/pages/Landing";
import Register from "./common/pages/Register";
import Login from "./common/pages/Login";
import Home from "./common/pages/Home";
import Error from "./common/pages/Error";
import Post from "./common/pages/Post";
import AlertPopup from "./common/components/AlertPopup";
import CreateTournament from "./common/pages/tournaments/createTournament";
import { theme } from "./theme";
import DevBlog from "./common/pages/devBlog";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <AlertPopup />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />

              <Route path="/" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>
              <Route path="/" element={<AppLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="blog" element={<DevBlog />} />
                <Route
                  path="tournament/create"
                  element={<CreateTournament />}
                />
              </Route>
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="blog" element={<Post />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </LocalizationProvider>
      </CssBaseLine>
    </ThemeProvider>
  );
}

export default App;

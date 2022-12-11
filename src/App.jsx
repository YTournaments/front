import React, { lazy, Suspense } from "react";
import CssBaseLine from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { responsiveTheme } from "./theme";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const AppLayout = lazy(() => import("./common/layout/AppLayout"));
const AuthLayout = lazy(() => import("./common/layout/AuthLayout"));
const AdminLayout = lazy(() => import("./common/layout/AdminLayout"));
const Landing = lazy(() => import("./common/pages/Landing"));
const Register = lazy(() => import("./common/pages/Register"));
const Login = lazy(() => import("./common/pages/Login"));
const Home = lazy(() => import("./common/pages/Home"));
const Error = lazy(() => import("./common/pages/Error"));
const Post = lazy(() => import("./common/pages/Post"));
const AlertPopup = lazy(() => import("./common/components/Popup/AlertPopup"));
const DevBlog = lazy(() => import("./common/pages/devBlog"));
import Match from "./common/pages/Match";
import CreateTournament from "./common/pages/tournaments/CreateTournament";
import Tournaments from "./common/pages/tournaments/Tournaments";
import Tournament from "./common/pages/tournaments/Tournament";

function App() {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseLine>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Suspense fallback={<></>}>
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
                  <Route path="tournaments" element={<Tournaments />} />
                  <Route path="tournament/:id" element={<Tournament />} />
                  <Route path="match/:id" element={<Match />} />
                </Route>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route path="blog" element={<Post />} />
                </Route>
                <Route path="*" element={<Error />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </LocalizationProvider>
      </CssBaseLine>
    </ThemeProvider>
  );
}

export default App;

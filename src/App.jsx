import { ThemeProvider } from "@mui/material/styles";
import CssBaseLine from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./common/layout/AppLayout";
import AuthLayout from "./common/layout/AuthLayout";
import Landing from "./common/pages/Landing";
import Signup from "./common/pages/Signup";
import Login from "./common/pages/Login";
import Home from "./common/pages/Home";
import Error from "./common/pages/Error";
import Post from "./common/pages/Post";
import { theme } from "./theme";
import DevBlog from "./common/pages/devBlog";
function App() {
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
            <Route path="/" element={<AppLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="blog" element={<DevBlog />} />
              <Route path="admin/blog" element={<Post />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </CssBaseLine>
    </ThemeProvider>
  );
}

export default App;

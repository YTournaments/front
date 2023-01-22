import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Navbar } from "@/common/components/Navbar/Navbar";

const AppLayout = lazy(() => import("@/common/layout/AppLayout"));
const AuthLayout = lazy(() => import("@/common/layout/AuthLayout"));
const AdminLayout = lazy(() => import("@/common/layout/AdminLayout"));

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<></>}>
      <Navbar />
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "/",
      children: [
        {
          element: <AppLayout />,
        },
        { path: "home", element: <Home /> },
        { path: "blog", element: <DevBlog /> },
        { path: "profil", element: <Profil /> },
        { path: "tournament/create", element: <Create /> },
        { path: "tournament/:id", element: <Tournament /> },
        { path: "tournament/:id/detail", element: <Detail /> },
        { path: "match/:id", element: <Match /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [{ path: "blog", element: <Post /> }],
    },
    { path: "404", element: <Error /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const Landing = Loadable(lazy(() => import("@/common/pages/Landing")));
const Home = Loadable(lazy(() => import("@/common/pages/Home")));
const DevBlog = Loadable(lazy(() => import("@/common/pages/devBlog")));
const Profil = Loadable(lazy(() => import("@/common/pages/Profil")));
const Create = Loadable(
  lazy(() => import("@/common/pages/tournaments/Create"))
);
const Tournament = Loadable(
  lazy(() => import("@/common/pages/tournaments/Tournament"))
);
const Detail = Loadable(
  lazy(() => import("@/common/pages/tournaments/Detail"))
);
const Match = Loadable(lazy(() => import("@/common/pages/Match")));
const Login = Loadable(lazy(() => import("@/common/pages/Login")));
const Register = Loadable(lazy(() => import("@/common/pages/Register")));
const Post = Loadable(lazy(() => import("@/common/pages/Post")));
const Error = Loadable(lazy(() => import("@/common/pages/Error")));

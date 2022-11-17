import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./common/context/authContext";
import { AdminContextProvider } from "./common/context/adminContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AdminContextProvider>
      <App />
      </AdminContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

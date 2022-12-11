import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./common/context/authContext";
import { AlertContextProvider } from "./common/context/alertContext";
import { RoleContextProvider } from "./common/context/roleContext";
import { registerSW } from "virtual:pwa-register";
import "./index.css";

registerSW({
  onNeedRefresh() {
    // show a prompt to user
  },
  onOfflineReady() {
    // show a ready to work offline to user
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RoleContextProvider>
        <AlertContextProvider>
          <App />
        </AlertContextProvider>
      </RoleContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

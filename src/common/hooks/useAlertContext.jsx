import { useContext } from "react";
import { AlertContext } from "@/common/context/alertContext";

export const useAlertContext = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw Error("useAlertContext must be used inside an AlertContextProvider");
  }

  return context;
};

import { AdminContext } from "@/common/context/adminContext";
import { useContext } from "react";

export const useAdminContext = () => {
  const context = useContext(AdminContext);

  if (!context) {
    throw Error("useAdminContext must be used inside an AdminContext");
  }

  return context;
};

import { RoleContext } from "../context/roleContext";
import { useContext } from "react";

export const useRoleContext = () => {
  const context = useContext(RoleContext);

  if (!context) {
    throw Error("useRoleContext must be used inside an RoleContext");
  }

  return context;
};

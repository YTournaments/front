import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { useRoleContext } from "./useRoleContext";

export const useLogout = () => {
  const { dispatch: dispatchRole } = useRoleContext();
  const { dispatch: dispatchAuth } = useAuthContext();
  const navigate = useNavigate();
  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");
    // navigate to login page
    navigate("/", { replace: true });
    // dispatch logout action
    dispatchAuth({ type: "LOGOUT" });
    dispatchRole({ type: "SET_ROLE", payload: "guest" });
  };

  return { logout };
};

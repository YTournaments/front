import { createContext, useReducer, useMemo, useEffect } from "react";
import jwtDecode from "jwt-decode";
export const RoleContext = createContext();

export const roleReducer = (state, action) => {
  switch (action.type) {
    case "SET_ROLE":
      return {
        role: action.payload,
      };
    default:
      return state;
  }
};

export const RoleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(roleReducer, {
    role: null,
  });

  const userRole = () => {
    const token = localStorage.getItem("user");
    if (token) {
      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;
      dispatch({
        type: "SET_ROLE",
        payload: role,
      });
    } else {
      dispatch({
        type: "SET_ROLE",
        payload: "guest",
      });
    }
  };

  useEffect(() => {
    userRole();
  }, [
    state.role,
    localStorage.getItem("user"),
    localStorage.getItem("user") !== null,
  ]);

  return (
    <RoleContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RoleContext.Provider>
  );
};

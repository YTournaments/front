import { WindowSharp } from "@mui/icons-material";
import { createContext, useReducer, useMemo, useEffect } from "react";
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
    fetch(
      import.meta.env.VITE_ENV === "prod"
        ? import.meta.env.VITE_API_URL + "/user/role"
        : "http://localhost:3001/user/role",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          dispatch({
            type: "SET_ROLE",
            payload: data.role,
          });
        } else {
          dispatch({
            type: "SET_ROLE",
            payload: "guest",
          });
        }
      });
  };
  useEffect(() => {
    userRole();
  }, [
    state.role,
    localStorage.getItem("user"),
    localStorage.getItem("user") !== null,
  ]);

  console.log("RoleContext state:", state);
  return (
    <RoleContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RoleContext.Provider>
  );
};

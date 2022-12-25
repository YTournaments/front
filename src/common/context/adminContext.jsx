import { createContext, useReducer, useEffect } from "react";
export const AdminContext = createContext();

export const adminReducer = (state, action) => {
  switch (action.type) {
    case "ADMIN":
      return {
        admin: action.payload,
      };
    case "USER":
      return {
        admin: action.payload,
      };
    default:
      return state;
  }
};

export const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, {
    admin: null,
  });

  const isAnAdmin = () => {
    fetch(
      import.meta.env.VITE_ENV === "prod"
        ? import.meta.env.VITE_API_URL + "api/V1/users/role"
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
        if (data.role === "admin" || data.role === "superadmin") {
          dispatch({ type: "ADMIN", payload: true });
        } else {
          dispatch({ type: "USER", payload: false });
        }
      });
  };
  useEffect(() => {
    isAnAdmin();
  }, []);
  console.log("AdminContext state:", state);
  return (
    <AdminContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContext;

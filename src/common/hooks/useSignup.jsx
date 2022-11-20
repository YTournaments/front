import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setIsLoading(true);
    const response = await fetch(
      import.meta.env.VITE_ENV === "prod"
        ? import.meta.env.VITE_API_URL + "/user/register"
        : "http://localhost:3001/user/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      }
    );
    const json = await response.json();
    if (json.error) {
      setError(json.error);
      setIsLoading(false);
      return;
    }
    if (response.ok && json.token) {
      // update loading state
      setIsLoading(false);
      localStorage.setItem("user", json.token);
      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
      return <Navigate to="/home" />;
    }
  };

  return { signup, isLoading, error };
};

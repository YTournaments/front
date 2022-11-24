// TODO refactor this and add better error handling and split code into smaller functions

/*import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import useAxios from "./useAxios";
import axios from "../api/index";
import { useAlertContext } from "./useAlertContext";

export const useRegister = () => {
  //const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { dispatch } = useAuthContext();
  const { setAlert } = useAlertContext();
  const [response, data, error, loading, axiosPost, axiosFetch] = useAxios();

  const register = (name, email, password) => {
    axiosFetch({
      axiosInstance: axios,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "post",
      url: "/user/register",
      requestConfig: {
        data: JSON.stringify({ name, email, password }),
      },
    });
  };
  useEffect(() => {
    let errors = error?.response?.status;

    if (errors === 401 || errors === 403 || errors === 500) {
      setAlert("Une erreur est survenue", "error");
    }
    if (response?.status === 200) {
      setAlert("Utilisateurs crée", "success");
    }
  }, [error, response]);

  /*  const register = async (name, email, password) => {
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

  return { register, isLoading, error, response, data };
};
*/

import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL =
  import.meta.env.VITE_ENV === "prod"
    ? import.meta.env.VITE_API_URL
    : "http://localhost:3001";

export const useAxiosFetch = (axiosParams) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.request(axiosParams);
      setData(response);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading, fetchData };
};
export const useAxiosPost = (axiosParams) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const postData = async () => {
    try {
      const post = await axios.request(axiosParams);
      setError(null);
      setData(post);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postData };
};

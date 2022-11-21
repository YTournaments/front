import { useState, useEffect } from "react";

const useAxios = () => {
  const [response, setResponse] = useState();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

  const axiosFetch = async (configObj) => {
    const {
      axiosInstance,
      headers,
      method,
      url,
      requestConfig = {},
    } = configObj;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);

      const res = await axiosInstance({
        headers,
        method,
        url,
        signal: ctrl.signal,
        ...requestConfig,
      });
      setData(res.data);
      setResponse(res);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return [response, data, error, loading, axiosFetch];
};

export default useAxios;

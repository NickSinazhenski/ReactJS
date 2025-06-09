import { useState, useEffect } from "react";

const useFetch = <T = unknown>(url: string, fetchOptions: RequestInit = {}) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      const requestInfo: {
        url: string;
        method: string;
        body: BodyInit | null;
      } = {
        url,
        method: fetchOptions.method || "GET",
        body: fetchOptions.body || null,
      };

      try {
        const response = await fetch(url, fetchOptions);
        const responseData = await response.json();

        setData(responseData);
        setLoading(false);

        const log = {
          payload: requestInfo,
          status: response.status,
        };

        localStorage.setItem(`fetch-log-${Date.now()}`, JSON.stringify(log));
      } catch (err) {
        setError(err);
        setLoading(false);

        const log = {
          payload: requestInfo,
          status: "error",
        };

        localStorage.setItem(`fetch-log-${Date.now()}`, JSON.stringify(log));
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const useFetch = <T,>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true; 
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result: T = await response.json();
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (error: any) {
        if (isMounted && error.name !== "AbortError") {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url, reload]);

  const refetch = () => setReload((prev) => !prev);

  return { data, loading, error, refetch };
};

export default useFetch;

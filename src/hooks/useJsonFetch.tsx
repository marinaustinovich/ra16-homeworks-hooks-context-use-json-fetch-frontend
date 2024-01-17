import { useState, useEffect } from "react";

type FetchOptions = {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
};

type UseJsonFetchResult<T> = [T | null, boolean, Error | null];

export function useJsonFetch<T>(
    url: string,
    opts: FetchOptions = {}
  ): UseJsonFetchResult<T>  {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, opts);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, loading, error];
};

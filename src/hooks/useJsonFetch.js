import { useEffect, useState } from 'react';

const useJsonFetch = (url, opts) => {
    const [data, setData] = useState(opts);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(response.statusText);
            }
            const data = await response.json();
            setData(data);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
        };

    fetchData();
    }, [url]);
    return { data, loading, error };
};

export default useJsonFetch;

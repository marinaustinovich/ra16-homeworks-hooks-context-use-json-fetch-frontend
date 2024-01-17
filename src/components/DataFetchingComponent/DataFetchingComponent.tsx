import React from "react";
import { FaSpinner } from "react-icons/fa";
import { useJsonFetch } from "../../hooks";

type Data = {
  status: string;
};

type Props = {
  url: string;
  title: string;
  className?: string;
};

export const DataFetchingComponent = ({ url, title, className }: Props) => {
  const [data, loading, error] = useJsonFetch<Data>(url, {method: 'get'});

  return (
    <div className={`data ${className}`}>
      <h3>{title}</h3>
      {loading ? (
        <div className="loader">
          <FaSpinner className="spin" />
        </div>
      ) : (
        <div>{data && data.status}</div>
      )}
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

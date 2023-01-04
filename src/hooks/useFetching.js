import React from "react";

export const useFetching = (callback) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const fetching = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetching, loading, error];
};

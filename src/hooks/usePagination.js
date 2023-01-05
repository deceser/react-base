import React from "react";

// pagination

export const usePagination = (totalPages) => {
  let result = [];
  const pagination = React.useMemo(() => {
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
    }
  }, [result, totalPages]);

  return result;
};

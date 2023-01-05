import React from "react";

import { usePagination } from "../../../hooks/usePagination";

import styles from "./index.module.scss";

const Pagination = ({ totalPages, changePage, page }) => {
  const pagesArr = usePagination(totalPages);
  return (
    <div className={styles.page__wrap}>
      {pagesArr.map((p) => (
        <span className={page === p ? styles.current__page : styles.page} onClick={() => changePage(p)} key={p}>
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;

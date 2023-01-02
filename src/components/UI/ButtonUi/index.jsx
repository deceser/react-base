import React from "react";

import styles from "./index.module.scss";

const ButtonUi = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button__ui}>
      {children}
    </button>
  );
};

export default ButtonUi;

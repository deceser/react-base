import React from "react";

import styles from "./index.module.scss";

const InputUi = (props) => {
  return <input {...props} className={styles.input__ui} />;
};

export default InputUi;

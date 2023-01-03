import React from "react";

import styles from "./index.module.scss";

const SelectUi = ({ options, defaultvalue, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled>{defaultvalue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectUi;

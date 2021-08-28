import React from "react";
import styles from "./ProductFilter.module.scss";

export const ProductFilter = ({
  categories,
  checkedValues,
  setCheckedValues,
}) => {
  const handleChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setCheckedValues(checkedValues.concat(value));
    } else {
      setCheckedValues(checkedValues.filter((item) => item !== value));
    }
  };

  return (
    <div className={styles.filter}>
      <p>Filter Categories</p>
      <div className="row col-12">
        {categories.map((value, index) => (
          <label key={index}>
            <input
              type="checkbox"
              onChange={handleChange}
              value={value}
              defaultChecked={true}
            />
            {value}
          </label>
        ))}
      </div>
    </div>
  );
};

import React from "react";

const Select = ({ options = [], onChange }) => {
  console.log(options);
  return (
    <div>
      <select
        onChange={onChange}
        defaultValue={options.find((el) => el.selected)?.value}
      >
        {options.map(({ label, value, selected }) => {
          return (
            <option value={value} key={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

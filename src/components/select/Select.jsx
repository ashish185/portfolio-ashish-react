
const Select = ({ options = [], onChange,  ariaLabelledby }) => {
  return (
    <div>
      <select
        onChange={onChange}
        defaultValue={options.find((el) => el.selected)?.value}
        aria-labelledby={ariaLabelledby}
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

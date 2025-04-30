const CheckboxGroup = ({ label, options, values, onChange }) => {
    return (
      <div>
        <p>{label}</p>
        {options.map((opt) => (
          <span key={opt}>
            <input
              type='checkbox'
              name={opt}
              checked={values[opt]}
              onChange={onChange}
            />
            <label>{opt[0].toUpperCase() + opt.slice(1)}</label>
          </span>
        ))}
    </div>
  );
};
export default CheckboxGroup;
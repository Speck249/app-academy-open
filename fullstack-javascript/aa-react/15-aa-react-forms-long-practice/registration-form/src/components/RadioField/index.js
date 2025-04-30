const RadioGroup = ({ label, name, options, selectedValue, onChange }) => {
    return (
      <div>
        <p>{label}</p>
        {options.map((opt) => (
          <span key={opt}>
            <input
              type='radio'
              name={name}
              value={opt}
              checked={selectedValue === opt}
              onChange={onChange}
            />
            <label>{opt[0].toUpperCase() + opt.slice(1)}</label>
          </span>
        ))}
    </div>
  );
};
export default RadioGroup;
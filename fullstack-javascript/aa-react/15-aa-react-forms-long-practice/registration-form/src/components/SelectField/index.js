const SelectField = ({id, label, value, onChange, error, options}) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <select id={id} value={value} onChange={onChange} className={error ? 'error' : ''}>
            <option value="">Select Phone Type</option>
            {options.map((opt) => (
               <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
      </div>
    );
};
export default SelectField;

const InputField = ({ id, label, type = 'text', value, onChange, placeholder, error, required = false }) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input 
          id={id}
          type={type} 
          value={value}
          onChange={onChange}
          className={error ? "error" : ""}
          placeholder={placeholder}
          required={required}
        />
        {error && <span className='error'>{error}</span>}
    </div>
  )
};
export default InputField;
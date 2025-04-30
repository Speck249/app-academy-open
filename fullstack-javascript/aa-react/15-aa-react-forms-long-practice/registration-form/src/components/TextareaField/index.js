const TextareaField = ({ name, label, value, onChange, error, ...rest }) => {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className={error ? 'error' : ''}
          {...rest}
        />
        {error && <span className='error'>{error}</span>}
      </div>
    );
};
export default TextareaField;
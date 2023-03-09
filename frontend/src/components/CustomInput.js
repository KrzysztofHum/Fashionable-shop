const CustomInput = (props) => {
  const { type, name, placeholder, classname, value, onChgange } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        required
        value={value}
        onChange={onChgange}
      />
    </div>
  );
};

export default CustomInput;

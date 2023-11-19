/* eslint-disable react/prop-types */
const Input = (props) => {
  const {name, type, placeholder} = props
  return (
    <input
      type={type}
      className="text-sm border py-4 px-4 rounded text-slate-700 placeholder:opacity-50 w-full"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
}

export default Input;

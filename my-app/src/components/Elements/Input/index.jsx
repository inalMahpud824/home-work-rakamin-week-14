/* eslint-disable react/prop-types */
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { name, title, type, placeholder } = props;
  return (
    <div className=" mb-6">
      <Label htmlFor={name}>{title}</Label>
      <Input name={name} placeholder={placeholder} type={type} />
    </div>
  );
};

export default InputForm;

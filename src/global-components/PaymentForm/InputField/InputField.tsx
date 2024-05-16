import React from "react";
import "./InputField.scss";

interface IInputFieldProps {
  name: string;
  label: string;
  value: string;
  minLength: number;
  maxLength: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<IInputFieldProps> = ({
  name,
  label,
  value,
  minLength,
  maxLength,
  onChange,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder={label}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="input-field"
        minLength={minLength}
        maxLength={maxLength}
        required
      />
    </>
  );
};

export default InputField;

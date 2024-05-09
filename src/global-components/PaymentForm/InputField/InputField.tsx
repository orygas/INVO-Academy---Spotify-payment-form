import React from 'react';
import './InputField.scss';

interface IInputFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<IInputFieldProps> = ({ name, label, value, onChange }) => {
  return (
    <>
      <input type="text" placeholder={label} name={name} id={name} value={value} onChange={onChange} className="input-field" required/>
    </>
  );
};

export default InputField;
import * as React from 'react';

type InputProps = {
  id: string;
  name: string;
  placeholder: string;
  type: 'password' | 'text' | 'email';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  id,
  name,
  placeholder,
  type,
  onChange,
  value,
}: InputProps) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className="input input-bordered w-96 bg-white text-black"
    />
  );
};

export default Input;

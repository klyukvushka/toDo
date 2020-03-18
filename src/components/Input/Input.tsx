import React from "react";
import classNames from "classnames";

type Props = {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
};

const Input: React.FC<Props> = props => {
  const {
    label,
    type,
    name,
    id,
    placeholder,
    className,
    value,
    onChange,
    onKeyPress
  } = props;
  const classes = classNames("", className);

  return (
    <div className={classes}>
      <input
        value={value}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;

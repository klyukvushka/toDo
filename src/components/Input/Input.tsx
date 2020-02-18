import React from "react";
import classNames from "classnames";
import "./Input.scss";

type Props = {
  label?: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  className?: string;
};

const Input: React.FC<Props> = props => {
  const { label, type, name, id, placeholder, className } = props;
  const classes = classNames("", className);

  return (
    <div className={classes}>
      <input type={type} name={name} id={id} placeholder={placeholder} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;

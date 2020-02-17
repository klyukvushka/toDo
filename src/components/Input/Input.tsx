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
  const classes = classNames("list", className);

  return (
    <div className={classes}>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

export default Input;

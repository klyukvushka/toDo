import React from "react";
import classNames from "classnames";

import "./Button.scss";

type Props = {
  className: string;
  children: string | React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
};

const Button: React.FC<Props> = props => {
  const { className, children, onClick } = props;
  const classes = classNames("btn", className);

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

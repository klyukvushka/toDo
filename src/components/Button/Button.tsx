import React from "react";
import classNames from "classnames";

import "./Button.scss";

type Props = {
  className: string;
  children: string | React.ReactNode;
};

const Button: React.FC<Props> = props => {
  const { className, children } = props;
  const classes = classNames("btn", className);

  return <button className={classes}>{children}</button>;
};

export default Button;

import React from "react";
import classNames from "classnames";
import "./Title.scss";

type Props = {
  className?: string;
  children: string;
};

const Title: React.FC<Props> = props => {
  const { className, children } = props;
  const classes = classNames("title", className);

  return <h1 className={classes}>{children}</h1>;
};

export default Title;

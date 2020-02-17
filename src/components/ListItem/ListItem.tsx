import React from "react";
import classNames from "classnames";

import Input from "../Input/Input";
import Button from "../Button/Button";

type Props = {
  className?: string;
  children: string;
};

const ListItem: React.FC<Props> = props => {
  const { className, children } = props;
  const classes = classNames("list-item", className);

  return (
    <li className={classes}>
      <Input
        className="list-input"
        label=""
        type="checkbox"
        name="list-input"
        id="list-input"
      />
      {children}
      <Button className="btn-remove">delete</Button>
    </li>
  );
};

export default ListItem;

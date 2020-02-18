import React from "react";
import classNames from "classnames";

import Input from "../Input/Input";
import Button from "../Button/Button";
import icon from "../../icons/bin.png";

type Props = {
  className?: string;
};

const ListItem: React.FC<Props> = props => {
  const { className } = props;
  const classes = classNames("list-item", className);

  const id = Date.now();

  return (
    <li className={classes}>
      <Input
        className="list-input"
        label="item"
        type="checkbox"
        name="list-input"
        id={`${id}`}
      />
      <Button className="btn-remove">
        <img src={icon} alt="delete" />
      </Button>
    </li>
  );
};

export default ListItem;

import React from "react";
import classNames from "classnames";
import { ITodo } from "../../interfaces/interfaces";

import Input from "../Input/Input";
import Button from "../Button/Button";
import icon from "../../icons/bin.png";

const ListItem: React.FC<ITodo> = props => {
  const { title, id, completed, className } = props;
  const classes = classNames("list-item", className);

  const handleClick = (event: React.MouseEvent) => {
    console.log(2);
  };

  return (
    <li className={`${classes}` + (completed ? "completed" : "")}>
      <div className="list-content">
        <Input
          className="list-input"
          label={title}
          type="checkbox"
          name="list-input"
          id={`${id}`}
          checked={completed}
        />
        <Button className="btn-remove" onClick={handleClick}>
          <img src={icon} alt="delete" />
        </Button>
      </div>
    </li>
  );
};

export default ListItem;

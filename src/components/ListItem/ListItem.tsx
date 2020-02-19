import React from "react";
import classNames from "classnames";

import Input from "../Input/Input";
import Button from "../Button/Button";
import icon from "../../icons/bin.png";

type Props = {
  className?: string;
  text: string;
  id: number;
  checked: boolean;
};

const ListItem: React.FC<Props> = props => {
  const { className, text, id, checked } = props;
  const classes = classNames("list-item", className);

  const handleClick = (event: React.MouseEvent) => {
    console.log(2);
  };

  return (
    <li className={`${classes}` + (checked ? "completed" : "")}>
      <div className="list-content">
        <Input
          className="list-input"
          label={text}
          type="checkbox"
          name="list-input"
          id={`${id}`}
          checked={checked}
        />
        <Button className="btn-remove" onClick={handleClick}>
          <img src={icon} alt="delete" />
        </Button>
      </div>
    </li>
  );
};

export default ListItem;

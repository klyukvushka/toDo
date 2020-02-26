import React from "react";
import classNames from "classnames";
import { ITodo } from "../../interfaces/interfaces";

import Input from "../Input/Input";
import Button from "../Button/Button";
import icon from "../../icons/bin.png";
import { useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "../../redux/actions/actions";

const ListItem: React.FC<ITodo> = props => {
  const { title, id, completed, className } = props;
  const classes = classNames("list-item", className);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent) => {
    dispatch(removeTodo(id));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(completeTodo(id, completed));
  };

  return (
    <li className={`${classes}` + (completed ? " completed" : "")}>
      <div className="list-content">
        <Input
          className="list-input"
          label={title}
          type="checkbox"
          name="list-input"
          id={`${id}`}
          checked={completed}
          onChange={handleChange}
        />
        <Button className="btn-remove" onClick={handleClick}>
          <img src={icon} alt="delete" />
        </Button>
      </div>
    </li>
  );
};

export default ListItem;

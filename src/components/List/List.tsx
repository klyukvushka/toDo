import React from "react";
import classNames from "classnames";
import "./List.scss";

import ListItem from "../ListItem/ListItem";
import { useSelector } from "react-redux";

type Props = {
  className?: string;
};

export const List: React.FC<Props> = props => {
  const { className } = props;
  const classes = classNames("list", className);
  const tasks = useSelector((state: any) => state.tasks);

  return (
    <ol className={classes}>
      {tasks.items.map((todo: any) => {
        return (
          <ListItem
            className={todo.completed ? "completed" : ""}
            title={todo.title}
            id={todo.id}
            key={todo.id}
            completed={todo.completed}
          />
        );
      })}
    </ol>
  );
};

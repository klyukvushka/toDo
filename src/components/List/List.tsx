import React from "react";
import classNames from "classnames";
import "./List.scss";

import { ITodo } from "../../interfaces/interfaces";
import ListItem from "../ListItem/ListItem";

type Props = {
  className?: string;
  todos: ITodo[];
};

const List: React.FC<Props> = props => {
  const { className, todos } = props;
  const classes = classNames("list", className);

  if (todos.length === 0) {
    return <p className="list-text">There is no todos</p>;
  }

  return (
    <ol className={classes}>
      {todos.map(todo => {
        return (
          <ListItem
            className={todo.completed ? "completed" : ""}
            text={todo.title}
            id={todo.id}
            key={todo.id}
            checked={todo.completed}
          />
        );
      })}
    </ol>
  );
};

export default List;

import React from "react";
import classNames from "classnames";

import "./List.scss";

import { ITodo } from "../../interfaces/interfaces";
import ListItem from "../ListItem/ListItem";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO } from "../../redux/constants";
import { Task } from "../../redux/types";

type Props = {
  className?: string;
  todos: ITodo[];
};

const addTodo = (task: Task) => ({
  type: ADD_TODO,
  payload: task
});

export const List: React.FC<Props> = props => {
  const { className, todos } = props;
  const classes = classNames("list", className);
  const tasks = useSelector((state: any) => state.tasks);

  const dispatch = useDispatch();

  return (
    <ol className={classes}>
      <button
        onClick={() =>
          dispatch(addTodo({ id: 1, title: "second todo", completed: false }))
        }
      >
        add add
      </button>
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

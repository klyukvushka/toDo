import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  DELETE_ALL,
  DELETE_COMPLETED
} from "../../redux/constants";
import { Task } from "../../redux/types";

export const addTodo = (task: Task) => ({
  type: ADD_TODO,
  payload: task
});

export const removeTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: id
});

export const completeTodo = (id: number) => ({
  type: COMPLETE_TODO,
  payload: id
});

export const deleteAll = () => ({
  type: DELETE_ALL
});

export const deleteCompleted = (completed: boolean) => ({
  type: DELETE_COMPLETED,
  payload: completed
});

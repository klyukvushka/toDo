import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  DELETE_ALL,
  DELETE_COMPLETED
} from "../constants";
import { Task } from "../types";

type TasksStateType = {
  items: Task[];
};

const initialState: TasksStateType = {
  items: []
};

export function tasks(
  state = initialState,
  action: { type: string; payload: any }
): TasksStateType {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }
    case DELETE_TODO: {
      return {
        items: state.items.filter(todo => todo.id !== action.payload)
      };
    }
    case COMPLETE_TODO: {
      return {
        items: state.items.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    }
    case DELETE_COMPLETED: {
      return {
        items: state.items.filter(todo => todo.completed !== true)
      };
    }
    case DELETE_ALL: {
      return {
        items: []
      };
    }
    default: {
      return state;
    }
  }
}

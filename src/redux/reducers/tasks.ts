import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../constants";
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
        ...state,
        items: state.items.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    }
    default: {
      return state;
    }
  }
}

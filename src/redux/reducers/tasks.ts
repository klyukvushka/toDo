import { ADD_TODO } from "../constants";
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
    default: {
      return state;
    }
  }
}

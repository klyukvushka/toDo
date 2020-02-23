// import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "./constants";

// interface IAddTodo {
//   type: typeof ADD_TODO;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// interface IDeleteTodo {
//   type: typeof DELETE_TODO;
// }

// interface ICompleteTodo {
//   type: typeof COMPLETE_TODO;
// }

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

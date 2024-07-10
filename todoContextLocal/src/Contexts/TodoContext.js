import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " Todo ",
      iscompleted: false,
    },
  ],

  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, Todo) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

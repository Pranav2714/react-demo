import { createSlice, nanoid } from "@reduxjs/toolkit";

//imp - store starting mai kaise dikhega
const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};

//reducer ka bada version is slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // reducer has properties and functions
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    }, // state and action compulsory remember it
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex != -1) {
        state.todos[todoIndex].text = text;
      }
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer; //store cannot take values from everyone and update
//it only updates whichever reducer we will provide

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [],
};

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		// take from the local storage and set the todos
		setTasks: (state, action) => {
			state.tasks = action.payload;
		},

		toggleComplete: (state, action) => {
			const index = state.todos.findIndex((todo) => todo.id === action.payload);
			state.tasks[index].completed = !state.tasks[index].completed;
		},

		setInput: (state, action) => {
			state.newInput = action.payload;
		},

		setNewTask: (state) => {
			if (!state.newInput) return;

			const newTask = {
				id: crypto.randomUUID(),
				name: state.newInput,
				completed: false,
			};

			state.tasks.push(newTask);
			state.newInput = "";
		},
	},
});

export const { setTasks, toggleComplete, setInput, setNewTask } =
	todoSlice.actions;

export const selectTodos = (state) => state.todos.tasks;
export const selectTaskById = (id) => (state) =>
	state.todos.tasks.find((task) => task.id === id);

export const selectInput = (state) => state.todos.newInput;

export default todoSlice.reducer;

import React from "react";
import { Counter } from "./components/Counter";
import Input from "./components/Input";
import Sort from "./components/Sort";
import TodoList from "./components/TodoList";
import "./style/App.scss";

function App() {
	return (
		<>
			<Input />
			<TodoList />
			<Sort />
		</>
	);
}

export default App;

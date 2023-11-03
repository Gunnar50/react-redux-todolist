import React from "react";
import { useDispatch } from "react-redux";
import { clearCompleted } from "../app/todo/todoSlice";
import "../style/TodoFooter.scss";
import Sort from "./Sort";

function TodoFooter({ setSort, activeTasks }) {
	const dispatch = useDispatch();

	return (
		<div className="todo-footer">
			<p>{activeTasks.length} items left</p>

			<Sort setSort={setSort} activeTasks={activeTasks} />

			<button onClick={() => dispatch(clearCompleted())}>
				Clear Completed
			</button>
		</div>
	);
}

export default TodoFooter;

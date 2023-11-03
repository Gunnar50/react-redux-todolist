import React from "react";
import { useDispatch } from "react-redux";
import { clearCompleted } from "../app/todo/todoSlice";

function Sort({ setSort, activeTasks }) {
	const dispatch = useDispatch();
	const handleSort = (e) => {
		const sortType = e.target.innerHTML.toLowerCase();
		setSort(() => ({
			all: false,
			active: false,
			completed: false,
			[sortType]: true,
		}));
	};

	return (
		<div className="sort-buttons">
			<button onClick={handleSort}>All</button>
			<button onClick={handleSort}>Active</button>
			<button onClick={handleSort}>Completed</button>
		</div>
	);
}

export default Sort;

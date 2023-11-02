import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInput, setNewTask } from "../app/todo/todoSlice";

function Input() {
	const [message, setMessage] = useState("");
	const dispatch = useDispatch();

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			dispatch(setNewTask());
			setMessage("");
		}
	};

	return (
		<div className="add-new">
			<input
				onInput={(e) => dispatch(setInput(e.target.value))}
				onChange={(e) => setMessage(e.target.value)}
				onKeyDown={handleKeyDown}
				type="text"
				className="input-todo"
				value={message}
			/>
		</div>
	);
}

export default Input;

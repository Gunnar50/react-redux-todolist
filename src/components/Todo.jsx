import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../app/todo/todoSlice";
import deleteIcon from "../assets/images/icon-cross.svg";
import "../style/Todo.scss";

function Todo({ id, name, completed }) {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteTask(id));
	};

	return (
		<li className={`todo-item${completed ? " completed" : ""}`}>
			<div className="todo-title" onClick={() => dispatch(toggleComplete(id))}>
				<input type="checkbox" />
				<span>{name}</span>
			</div>
			<button onClick={handleDelete} className="delete">
				<img src={deleteIcon} />
			</button>
		</li>
	);
}

export default Todo;

import { useDispatch, useSelector } from "react-redux";
import { selectTaskById } from "../app/todo/todoSlice";

function Todo({ id }) {
	const dispatch = useDispatch();
	const task = useSelector(selectTaskById(id));
	console.log(task);
	return (
		<li>
			<input type="checkbox" />
			{task.name}
		</li>
	);
}

export default Todo;

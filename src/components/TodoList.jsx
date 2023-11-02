import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../app/todo/todoSlice";
import Todo from "./Todo";

function TodoList() {
	const dispatch = useDispatch();
	const todos = useSelector(selectTodos);
	console.log(todos);

	return (
		<ul>
			{todos.map((task) => {
				return <Todo key={task.id} id={task.id} />;
			})}
		</ul>
	);
}

export default TodoList;

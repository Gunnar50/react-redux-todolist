import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "../app/counter/counterSlice";

export function Counter() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();

	return (
		<div className="counter">
			<button
				onClick={() => {
					dispatch(increment(1));
				}}
			>
				add
			</button>
			{count}
		</div>
	);
}

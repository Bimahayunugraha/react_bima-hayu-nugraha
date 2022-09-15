import TodoCard from "../components/TodoCard";
import style from "./TodoItem.module.css";

const TodoItem = ({ tasks }) => {
	return (
		<div>
			{tasks.map((task) => (
				<div key={task.id}>
					{task.completed === true ? (
						<h4 className={style.todoCompletedTrue}>
							<TodoCard task={task} />
						</h4>
					) : (
						<TodoCard task={task} />
					)}
				</div>
			))}
		</div>
	);
};

export default TodoItem;

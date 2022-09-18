import style from "./TodoCard.module.css";

const TodoCard = ({ task }) => {
	return (
		<div className={style.todoCard}>
			<h4 className={style.todoListItem}>{task.title}</h4>
		</div>
	);
};

export default TodoCard;

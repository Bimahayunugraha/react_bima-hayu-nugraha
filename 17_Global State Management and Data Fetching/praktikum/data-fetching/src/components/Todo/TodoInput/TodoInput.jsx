// import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../../store/features/todosSlice";

import style from "./TodoInput.module.css";

const TodoInput = () => {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const title = formData.get("title");

		dispatch(createTodo({ title }));
	};

	return (
		<div className="pt-4">
			<form onSubmit={handleSubmit}>
				<div className="d-flex justify-content-between">
					<div className={`d-flex w-100 rounded-pill ${style.todoInput}`}>
						<input
							type="text"
							className="form-control border rounded-pill border-0 px-3 pb-2 fw-semibold"
							name="title"
							placeholder="Add todo..."
							required
						/>
						<button type="submit" className={`btn fw-bold pe-3 ${style.btnSubmit}`}>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TodoInput;

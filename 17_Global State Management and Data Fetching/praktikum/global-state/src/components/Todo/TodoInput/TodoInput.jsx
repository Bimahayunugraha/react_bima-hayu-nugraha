import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todoSlice";

import style from "./TodoInput.module.css";

const TodoInput = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!value) {
			alert("Anda harus mengisi inputan tersebut terlebih dahulu sebelum Anda melakukan submit");
			return;
		}

		dispatch(addTodo(value));
		setValue("");
	};

	return (
		<div className="pt-4">
			<form onSubmit={() => {}}>
				<div className="d-flex justify-content-between">
					<div className={`d-flex w-100 rounded-pill ${style.todoInput}`}>
						<input
							type="text"
							className="form-control border rounded-pill border-0 px-3 pb-2 fw-semibold"
							value={value}
							onChange={handleChange}
							name="title"
							placeholder="Add todo..."
						/>
						<button type="submit" className={`btn fw-bold pe-3 ${style.btnSubmit}`} onClick={handleSubmit}>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TodoInput;

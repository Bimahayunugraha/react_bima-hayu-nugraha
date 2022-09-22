import style from "./TodoInput.module.css";

const TodoInput = ({ handleSubmit, handleChange, value }) => {
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

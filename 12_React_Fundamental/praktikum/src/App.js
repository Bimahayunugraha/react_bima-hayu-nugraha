import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TodoItem from "./pages/TodoList/TodoItem/TodoItem";
import { TodoData } from "./TodoData";

function App() {
	return (
		<>
			<Navbar />
			<TodoItem tasks={TodoData} />
		</>
	);
}

export default App;

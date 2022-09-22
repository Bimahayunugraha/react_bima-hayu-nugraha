import "./App.css";
import Header from "./components/Header/Header";
import Todo from "./pages/Todo/Todo";

function App() {
	return (
		<div className="container">
			<Header />
			<Todo />
		</div>
	);
}

export default App;

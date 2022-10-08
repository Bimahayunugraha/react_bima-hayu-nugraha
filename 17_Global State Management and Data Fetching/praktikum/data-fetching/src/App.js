import { Provider } from "react-redux";
import { store } from "./store/store";
import WebRoutes from "./routes/Web";

function App() {
	return (
		<>
			<Provider store={store}>
				<WebRoutes />
			</Provider>
		</>
	);
}

export default App;

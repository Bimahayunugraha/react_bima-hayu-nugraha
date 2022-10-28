import { ApolloProvider } from "@apollo/client";

import Home from "./component/Home";
import client from "./graphql";

import "./App.css";

function App() {
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<Home />
			</ApolloProvider>
		</div>
	);
}

export default App;

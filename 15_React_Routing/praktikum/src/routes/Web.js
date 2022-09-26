import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "../components/NotFound/NotFound";
import About from "../pages/About/About";
import AboutApp from "../pages/About/components/AboutApp/AboutApp";
import AboutAuthor from "../pages/About/components/AboutAuthor/AboutAuthor";
import Todo from "../pages/Todo/Todo";

const WebRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Todo />} />
					<Route path="about" element={<About />}>
						<Route path="about-app" element={<AboutApp />} />
						<Route path="about-author" element={<AboutAuthor />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default WebRoutes;

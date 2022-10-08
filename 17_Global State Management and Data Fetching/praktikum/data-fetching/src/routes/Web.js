import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import NotFound from "../components/NotFound/NotFound";
import About from "../pages/About";
import AboutApp from "../pages/AboutApp";
import AboutAuthor from "../pages/AboutAuthor";
import Todo from "../pages/Todo";

const WebRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Todo />} />
					</Route>
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

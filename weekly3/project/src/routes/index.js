import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import LandingPage from "../pages/LandingPage";
import NotFound from "../components/NotFound";
import { Provider } from "react-redux";
import { store } from "../store/store";
import AboutPage from "../pages/AboutPage";
import EventsPage from "../pages/EventsPage";

const SetupRoutes = () => {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<LandingPage />} />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/events" element={<EventsPage />} />
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	);
};

export default SetupRoutes;

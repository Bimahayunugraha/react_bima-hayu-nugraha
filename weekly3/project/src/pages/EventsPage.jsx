import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventLists from "../components/EventLists";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import { fetchEvents } from "../store/features/eventsSlice";

const EventsPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [dataPerPage] = useState(6);

	const events = useSelector((state) => state.events.data);
	const status = useSelector((state) => state.events.status);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchEvents());
	}, [dispatch]);

	const indexOfLastData = currentPage * dataPerPage;
	const indexOfFirstData = indexOfLastData - dataPerPage;
	const currentData = events.slice(indexOfFirstData, indexOfLastData);
	const nPages = Math.ceil(events.length / dataPerPage);

	return (
		<div>
			<section id="events" className="events">
				{status === "succeeded" ? (
					<div>
						<EventLists events={currentData} />
						<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} nPages={nPages} />
					</div>
				) : (
					<Loading />
				)}
			</section>
		</div>
	);
};

export default EventsPage;

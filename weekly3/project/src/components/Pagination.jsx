import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, setCurrentPage, nPages }) => {
	const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

	const nextPage = () => {
		if (currentPage !== nPages) setCurrentPage(currentPage + 1);
	};
	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};
	return (
		<div>
			<nav>
				<ul className="pagination justify-content-center">
					<li className="page-item">
						<Link className="page-link" onClick={prevPage} to="#">
							Previous
						</Link>
					</li>
					{pageNumbers.map((pgNumber) => (
						<li key={pgNumber} className={`page-item ${currentPage === pgNumber ? "active" : ""} `}>
							<Link onClick={() => setCurrentPage(pgNumber)} className="page-link" to="#">
								{pgNumber}
							</Link>
						</li>
					))}
					<li className="page-item">
						<Link className="page-link" onClick={nextPage} to="#">
							Next
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;

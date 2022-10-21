import React from "react";

const EventLists = ({ events }) => {
	return (
		<div className="events">
			<div className="container">
				<div className="row gy-4">
					{events?.map((item, index) => (
						<div className="col-lg-4 col-md-6" key={index}>
							<div className="events-box blue">
								<i className="bi bi-calendar3-event icon"></i>
								<div className="events-lists">
									<div className="ralign-self-center gy-4">
										<div className="events-item d-flex align-items-center">
											<i className="bi bi-check"></i>
											<h3>{item.name}</h3>
										</div>
										<div className="events-item d-flex align-items-center">
											<i className="bi bi-check"></i>
											<a href={item.url} className="link">
												Read more
											</a>
										</div>
										<div className="events-item d-flex align-items-center">
											<i className="bi bi-check"></i>
											<h3>{item.site}</h3>
										</div>
										<div className="events-item d-flex align-items-center">
											<i className="bi bi-check"></i>
											<h3>{item.status}</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EventLists;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/features/usersSlice";
import Loading from "./Loading";

const AboutTeam = () => {
	const users = useSelector((state) => state.users.data);
	const status = useSelector((state) => state.users.status);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<div className="about-team">
			<div className="about-header">
				<div className="container">
					<h2>About Team</h2>
					<p>Our hard working team</p>
				</div>
			</div>
			<div className="about-team-content">
				<div className="container">
					{status === "succeeded" ? (
						<div className="row gy-4">
							{users.map((item) => (
								<div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={item.id}>
									<div className="member">
										<div className="member-img">
											<img src={item.avatar} className="img-fluid" alt="avatar" />
										</div>
										<div className="member-info">
											<h4>{item.name}</h4>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<Loading />
					)}
				</div>
			</div>
		</div>
	);
};

export default AboutTeam;

import { useLazyQuery } from "@apollo/client";
import { useState } from "react";

import { GetPassengerById } from "../graphql/gql";
import ListItem from "./ListItem";
import Loading from "./Loading/Loading";

const ListPassengerById = (props) => {
	const [getPassenger, { data, loading, error }] = useLazyQuery(GetPassengerById);
	const [passengerId, setPassengerId] = useState("");

	if (error) {
		return console.log(error);
	}

	const handleGetPassengerById = () => {
		if (!passengerId) {
			alert("Please, enter passenger id to get data passenger by id");
			return;
		}
		getPassenger({
			variables: {
				id: passengerId,
			},
		});
	};

	const handleChangePassengerId = (e) => {
		if (e.target) {
			setPassengerId(e.target.value);
		}
	};

	return (
		<div>
			<h4 style={{ borderTop: "1px solid #e5e7eb", paddingTop: "10px" }}>Get passenger by id</h4>
			<div style={{ margin: "20px" }}>
				<input value={passengerId} onChange={handleChangePassengerId} placeholder="Enter passenger id" />
				<button onClick={handleGetPassengerById} style={{ marginLeft: "10px" }}>
					Get Data
				</button>
			</div>
			{loading ? (
				<Loading />
			) : (
				<table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
					<thead bgcolor="red">
						<td>Nama</td>
						<td>Umur</td>
						<td>Jenis Kelamin</td>
						<td bgcolor="white" className="removeBorder"></td>
					</thead>
					{data?.passenger.map((item) => (
						<ListItem key={item.id} data={item} hapusPengunjung={props.hapusPengunjung} />
					))}
				</table>
			)}
		</div>
	);
};

export default ListPassengerById;

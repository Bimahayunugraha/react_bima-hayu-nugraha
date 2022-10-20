import { useQuery } from "@apollo/client";

import { GetPassengers } from "../graphql/gql";
import ListItem from "./ListItem";
import Loading from "./Loading/Loading";

const ListPassenger = (props) => {
	const { data, loading, error } = useQuery(GetPassengers);

	if (error) {
		return console.log(error);
	}
	return (
		<div>
			<h4>Get all passenger</h4>
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

export default ListPassenger;

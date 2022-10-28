import { useSubscription } from "@apollo/client";

import { SubscriptionPassenger } from "../graphql/gql";
import ListItem from "./ListItem";
import Loading from "./Loading/Loading";

const ListPassenger = () => {
	const { data, loading, error } = useSubscription(SubscriptionPassenger);

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
						<ListItem key={item.id} data={item} />
					))}
				</table>
			)}
		</div>
	);
};

export default ListPassenger;

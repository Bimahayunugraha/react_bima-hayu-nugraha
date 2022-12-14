import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import ListPassengerById from "./ListPassengerById";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: uuidv4(),
					nama: "Yoga",
					umur: 22,
					jenisKelamin: "Pria",
				},
				{
					id: uuidv4(),
					nama: "Ria",
					umur: 19,
					jenisKelamin: "Wanita",
				},
				{
					id: uuidv4(),
					nama: "Fahmi",
					umur: 25,
					jenisKelamin: "Pria",
				},
				{
					id: uuidv4(),
					nama: "Lala",
					umur: 21,
					jenisKelamin: "Wanita",
				},
				{
					id: uuidv4(),
					nama: "Ivan",
					umur: 25,
					jenisKelamin: "Pria",
				},
			],
		};
	}

	hapusPengunjung = (id) => {
		this.setState({
			data: [
				...this.state.data.filter((item) => {
					return item.id !== id;
				}),
			],
		});
	};

	tambahPengunjung = (newUser) => {
		const newData = {
			id: uuidv4(),
			...newUser,
		};
		this.setState({
			data: [...this.state.data, newData],
		});
	};

	render() {
		return (
			<div>
				<Header />
				<div className="container-home">
					<ListPassenger data={this.state.data} hapusPengunjung={this.hapusPengunjung} />
					<ListPassengerById />
					<PassengerInput tambahPengunjung={this.tambahPengunjung} />
				</div>
			</div>
		);
	}
}

export default Home;

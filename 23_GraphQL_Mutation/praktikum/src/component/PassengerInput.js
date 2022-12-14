import { useMutation } from "@apollo/client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddPassenger, GetPassengers } from "../graphql/gql";

import "./Home.css";
import Loading from "./Loading/Loading";

function PassengerInput() {
	const [state, setState] = useState({
		nama: "",
		umur: "",
		jenisKelamin: "Pria",
		editing: true,
	});

	const [addPassenger, { loading: loadingAdd, error: errorAdd }] = useMutation(AddPassenger, {
		refetchQueries: [GetPassengers],
	});

	if (loadingAdd) {
		return <Loading />;
	}

	if (errorAdd) {
		return console.log(errorAdd);
	}

	const tambahPengunjung = (newPassenger) => {
		addPassenger({
			variables: {
				id: uuidv4(),
				...newPassenger,
			},
		});
	};

	const onChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (state.nama.trim() && state.umur && state.jenisKelamin) {
			const umur = state.umur;
			if (umur >= 75 || umur <= 12) {
				alert("Umur tidak sesuai");
			} else {
				const newData = {
					nama: state.nama,
					umur: state.umur,
					jenisKelamin: state.jenisKelamin,
				};
				tambahPengunjung(newData);
				setState({
					...state,
					nama: "",
					umur: "",
					jenisKelamin: "Pria",
				});
			}
		} else {
			alert("Data masih ada yang kosong");
		}
	};

	const handleBukaInput = () => {
		setState({
			...state,
			editing: false,
		});
	};

	const handleTutupInput = () => {
		setState({
			...state,
			editing: true,
		});
	};

	let viewMode = {};
	let editMode = {};

	if (state.editing) {
		viewMode.display = "none";
	} else {
		editMode.display = "none";
	}

	return (
		<div>
			<div onSubmit={handleSubmit} style={viewMode}>
				<p>Masukkan Nama Anda</p>
				<input type="text" className="input-text" placeholder="Nama anda ..." value={state.nama} name="nama" onChange={onChange} />
				<p>Masukkan Umur Anda</p>
				<input type="number" className="input-text" placeholder="Umur anda ..." value={state.umur} name="umur" onChange={onChange} />
				<p>Masukkan Jenis Kelamin Anda</p>
				<select onChange={onChange} name="jenisKelamin">
					<option value="Pria" selected>
						Pria
					</option>
					<option value="Wanita">Wanita</option>
				</select>
				<p></p>
				<button onClick={handleSubmit}>Submit</button>
				<button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
					Selesai
				</button>
			</div>
			<button className="inputan" onClick={handleBukaInput} style={editMode}>
				Masukkan Nama Pelanggan
			</button>
		</div>
	);
}

export default PassengerInput;

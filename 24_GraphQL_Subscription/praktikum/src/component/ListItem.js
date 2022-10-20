import { useMutation } from "@apollo/client";
import { useState } from "react";
import { DeletePassenger, GetPassengers, UpdatePassenger } from "../graphql/gql";

import "./Home.css";
import Loading from "./Loading/Loading";
import UpdateModal from "./UpdateModal";

const ListItem = (props) => {
	const { id, nama, umur, jenisKelamin } = props.data;
	const baseUpdate = {
		nama: nama,
		umur: umur,
		jenisKelamin: jenisKelamin,
	};

	const [update, setUpdate] = useState(baseUpdate);
	const [modalTrigger, setModalTrigger] = useState(false);
	const [updatePassenger, { loading: loadingUpdate, error: errorUpdate }] = useMutation(UpdatePassenger, {
		refetchQueries: [GetPassengers],
	});
	const [deletePassenger, { loading: loadingDelete, error: errorDelete }] = useMutation(DeletePassenger, {
		refetchQueries: [GetPassengers],
	});

	if (loadingUpdate || loadingDelete) {
		return <Loading />;
	}

	if (errorUpdate || errorDelete) {
		return console.log(errorUpdate);
	}

	const updatePengunjung = (editPassenger) => {
		updatePassenger({
			variables: editPassenger,
		});
	};
	const hapusPengunjung = (idx) => {
		deletePassenger({
			variables: { id: idx },
		});
	};

	const handleChange = (e) => {
		setUpdate({ ...update, [e.target.name]: e.target.value });
	};

	const handleUpdate = () => {
		const passengerUpdated = { id, ...update };
		updatePengunjung(passengerUpdated);
		handleModalTrigger();
	};

	const handleModalTrigger = () => {
		setModalTrigger(!modalTrigger);
	};

	return (
		<tr>
			<td>{nama}</td>
			<td>{umur}</td>
			<td>{jenisKelamin}</td>
			<td className="removeBorder">
				<button onClick={handleModalTrigger}>Edit</button>
				{modalTrigger && <UpdateModal handleModalTrigger={handleModalTrigger} handleUpdate={handleUpdate} handleChange={handleChange} update={update} />}
			</td>
			<td
				className="removeBorder"
				onClick={() => {
					if (window.confirm(`Apakah Anda yakin ingin menghapus daftar pengunjung dengan nama ${nama} ?`)) hapusPengunjung(id);
				}}>
				<button>Hapus</button>
			</td>
		</tr>
	);
};

export default ListItem;

import { gql } from "@apollo/client";

export const GetPassengers = gql`
	query GetPassengers {
		passenger {
			id
			nama
			umur
			jenisKelamin
		}
	}
`;

export const GetPassengerById = gql`
	query GetPassengerById($id: uuid) {
		passenger(where: { id: { _eq: $id } }) {
			id
			nama
			umur
			jenisKelamin
		}
	}
`;

export const AddPassenger = gql`
	mutation AddPassenger($id: uuid, $nama: String, $umur: Int, $jenisKelamin: String) {
		insert_passenger(objects: { id: $id, nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin }) {
			returning {
				id
				nama
				umur
				jenisKelamin
			}
		}
	}
`;

export const UpdatePassenger = gql`
	mutation UpdatePassenger($id: uuid!, $nama: String, $umur: Int, $jenisKelamin: String) {
		update_passenger_by_pk(pk_columns: { id: $id }, _set: { nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin }) {
			id
			nama
			umur
			jenisKelamin
		}
	}
`;

export const DeletePassenger = gql`
	mutation DeletePassenger($id: uuid!) {
		delete_passenger_by_pk(id: $id) {
			id
			nama
			umur
			jenisKelamin
		}
	}
`;

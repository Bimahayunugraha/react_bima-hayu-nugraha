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

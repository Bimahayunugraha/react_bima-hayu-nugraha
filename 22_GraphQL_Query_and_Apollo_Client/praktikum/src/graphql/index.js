import { ApolloClient, InMemoryCache } from "@apollo/client";
import CONST from "../utils/contants";

const client = new ApolloClient({
	uri: CONST.BASE_URL_GRAPHQL_API,
	cache: new InMemoryCache(),
	headers: {
		"x-hasura-admin-secret": CONST.API_KEY,
	},
});

export default client;

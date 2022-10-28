import axios from "axios";
import CONST from "../utils/contants";

const configHasuraAPI = {
	baseURL: CONST.BASE_URL_HASURA_API,
	headers: {
		"x-hasura-admin-secret": CONST.HASURA_API_KEY,
	},
};

const usersInstance = axios.create(configHasuraAPI);
export default usersInstance;

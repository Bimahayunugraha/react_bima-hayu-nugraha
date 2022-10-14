import axios from "axios";
import CONST from "../utils/contants";

const config = {
	baseURL: CONST.TODO_API_BASE_URL,
	headers: {
		"x-hasura-admin-secret": CONST.TODO_API_KEY,
	},
};

const axiosInstance = axios.create(config);
export default axiosInstance;

import axios from "axios";
import CONST from "../utils/contants";

const configPublicAPI = {
	baseURL: CONST.BASE_URL_PUBLIC_API,
};

const eventsInstance = axios.create(configPublicAPI);
export default eventsInstance;

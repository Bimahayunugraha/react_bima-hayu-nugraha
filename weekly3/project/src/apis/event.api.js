import eventsInstance from "../configs/eventsInstance";

const EventsAPI = {
	async getAllEvents() {
		try {
			const response = await eventsInstance.get("/all");
			return response;
		} catch (error) {
			const { message } = error.response.data;
			throw new Error(message);
		}
	},
};

export default EventsAPI;

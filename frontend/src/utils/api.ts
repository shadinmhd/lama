import axios, { isAxiosError } from "axios";
import { toast } from "sonner";

const api = axios.create({
	baseURL: import.meta.env.VITE_API,
	withCredentials: true
})

export const handleAxiosError = (error: unknown) => {
	if (isAxiosError(error)) {
		if (error.response?.data.message) {
			toast.error(error.response.data.message)
		} else {
			toast.error(error.message)
		}
	} else {
		toast.error("Something went wrong")
	}
}

export default api

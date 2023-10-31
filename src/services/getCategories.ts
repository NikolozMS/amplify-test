import { Category } from "@/types/CategoryType";
import axios from "axios";

export const getCategories = async (): Promise<Category[]> => {
	const resp = await axios.get("https://api2.myauto.ge/ka/cats/get");
	return resp.data.data;
};

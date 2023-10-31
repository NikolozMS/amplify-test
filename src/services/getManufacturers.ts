import axios from "axios";
import { ManufacturerType } from "@/types/ManufacturerType";

export const getManufacturers = async (): Promise<ManufacturerType[]> => {
	const resp = await axios.get("https://static.my.ge/myauto/js/mans.json");
	return resp.data;
};

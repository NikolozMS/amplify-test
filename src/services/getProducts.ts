import { Pagination, ProductType } from "@/types/ProductType";
import axios from "axios";

type ProductsResponse = {
	items: ProductType[];
	meta: Pagination;
};
export const getProducts = async (
	queryString: string
): Promise<ProductsResponse> => {
	let url = "https://api2.myauto.ge/ka/products/";

	if (queryString) {
		url += "?" + queryString;
	}

	const resp = await axios.get(url);

	return resp.data.data;
};

import { Pagination, ProductType } from "@/types/ProductType";
import { objectToQueryString } from "@/utils/objectToQueryString";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";

type ProductsResponse = {
	items: ProductType[];
	meta: Pagination;
};
export const getProducts = async (
	query: ParsedUrlQuery
): Promise<ProductsResponse> => {
	let url = "https://api2.myauto.ge/ka/products/";

	if (query) {
		let queryString = objectToQueryString(query);

		if (queryString.includes("NaN")) {
			queryString = queryString.replace("PriceTo=NaN", "");
		}

		url += "?" + queryString;
	}

	const resp = await axios.get(url);

	return resp.data.data;
};

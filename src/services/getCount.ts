import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { objectToQueryString } from "@/utils/objectToQueryString";

type CountResponse = { count: number };
export const getCount = async (
	query: ParsedUrlQuery,
	signal?: AbortSignal
): Promise<CountResponse> => {
	let url = "https://api2.myauto.ge/ka/products/count/";

	if (query) {
		let queryString = objectToQueryString(query);

		if (queryString.includes("NaN")) {
			queryString = queryString.replace("PriceTo=NaN", "");
		}

		url += "?" + queryString;
	}

	const resp = await axios.get(url, { signal });

	return resp.data.data[0];
};

import { ParsedUrlQuery } from "querystring";

export function objectToQueryString(params: ParsedUrlQuery): string {
	const keyValuePairs: string[] = [];

	for (const key in params) {
		if (Object.prototype.hasOwnProperty.call(params, key)) {
			const encodedKey: string = encodeURIComponent(key);
			// @ts-ignore
			const encodedValue: string = encodeURIComponent(params[key]!.toString());
			keyValuePairs.push(`${encodedKey}=${encodedValue}`);
		}
	}

	return keyValuePairs.join("&");
}

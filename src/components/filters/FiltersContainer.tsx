import { Dispatch, SetStateAction } from "react";

import { FiltersAction } from "./FiltersAction";
import { FiltersBody } from "./FiltersBody";
import { FiltersHeader } from "./FiltersHeader";

import { objectToQueryString } from "@/utils/objectToQueryString";

import { useRouter } from "next/router";
import { SearchTypes } from "@/types/searchTypes";
import { ParsedUrlQuery } from "querystring";

const FiltersContainer = ({
	setSearch,
	search,
	isLoading,
	foundAmount,
}: {
	query: ParsedUrlQuery;
	setSearch: Dispatch<SetStateAction<SearchTypes>>;
	search: SearchTypes;
	isLoading: boolean;
	foundAmount?: number;
}) => {
	const { push } = useRouter();

	const handleFilterUpdate = async (newFilter: SearchTypes) => {
		setSearch((prevState) => ({ ...prevState, ...newFilter }));
	};

	const handleSubmit = async () => {
		const queryString = objectToQueryString(search as ParsedUrlQuery);
		push(`/?${queryString}`, undefined, { shallow: true });
	};

	return (
		<aside className="flex flex-col bg-white border-solid border border-black-200 w-[250px] h-[520px] rounded-t-[1.1rem]">
			<FiltersHeader search={search} setSearch={setSearch} />
			<FiltersBody search={search} handleFilterUpdate={handleFilterUpdate} />
			<FiltersAction
				foundAmount={foundAmount}
				isLoading={isLoading}
				onSubmit={handleSubmit}
			/>
		</aside>
	);
};

export default FiltersContainer;

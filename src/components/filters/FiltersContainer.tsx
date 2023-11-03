import { Dispatch, SetStateAction } from "react";

import { FiltersAction } from "./FiltersAction";
import { FiltersBody } from "./FiltersBody";
import { FiltersHeader } from "./FiltersHeader";

import { SearchTypes } from "@/types/searchTypes";
import { ParsedUrlQuery } from "querystring";
import { useQueryClient } from "@tanstack/react-query";

const FiltersContainer = ({
	setSearch,
	search,
	isLoading,
	foundAmount,
	handleSearchSubmit,
}: {
	query: ParsedUrlQuery;
	setSearch: Dispatch<SetStateAction<SearchTypes>>;
	search: SearchTypes;
	isLoading: boolean;
	foundAmount?: number;
	handleSearchSubmit: () => void;
}) => {
	const queryClient = useQueryClient();
	const handleFilterUpdate = async (newFilter: SearchTypes) => {
		setSearch((prevState) => ({ ...prevState, ...newFilter }));
		setTimeout(() => {
			queryClient.removeQueries({ type: "inactive", queryKey: ["amount"] });
		}, 500);
	};

	return (
		<aside className="hidden md:flex flex-col bg-white border-solid border border-black-200 w-[250px] h-[520px] rounded-t-[1.1rem]">
			<FiltersHeader search={search} setSearch={setSearch} />
			<FiltersBody search={search} handleFilterUpdate={handleFilterUpdate} />
			<FiltersAction
				foundAmount={foundAmount}
				isLoading={isLoading}
				onSubmit={handleSearchSubmit}
			/>
		</aside>
	);
};

export default FiltersContainer;

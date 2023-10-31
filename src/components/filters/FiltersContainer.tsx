"use client";

import { useState } from "react";

import { FiltersAction } from "./FiltersAction";
import { FiltersBody } from "./FiltersBody";
import { FiltersHeader } from "./FiltersHeader";

import { objectToQueryString } from "@/utils/objectToQueryString";

import { getCount } from "@/services/getCount";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { SearchTypes } from "@/types/searchTypes";
import { ParsedUrlQuery } from "querystring";

const FiltersContainer = ({ query }: { query: ParsedUrlQuery }) => {
	const { push } = useRouter();
	const [search, setSearch] = useState<SearchTypes>({
		TypeID: 0,
		CurrencyID: 3,
		...query,
	});

	const { isLoading, data } = useQuery({
		queryKey: ["amount", search],
		queryFn: ({ signal }) => getCount(search as ParsedUrlQuery, signal),
	});

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
				foundAmount={data?.count ?? 0}
				isLoading={isLoading}
				onSubmit={handleSubmit}
			/>
		</aside>
	);
};

export default FiltersContainer;

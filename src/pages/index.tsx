import React, { useEffect, useMemo, useRef, useState } from "react";
import {
	QueryClient,
	dehydrate,
	useInfiniteQuery,
	useQuery,
} from "@tanstack/react-query";
import Head from "next/head";

import { BreadCrumb } from "@/components/BreadCrumbs";

import { getCount } from "@/services/getCount";
import { ParsedUrlQuery } from "querystring";

import { ProductHeader } from "@/components/Product/ProductHeader";
import { SearchTypes } from "@/types/searchTypes";

import { ProductsResponse, getProducts } from "@/services/getProducts";

import FiltersContainer from "@/components/filters/FiltersContainer";
import { useRouter } from "next/router";
import { Card } from "@/components/Product/Card";
import { ProductType } from "@/types/ProductType";

const defaultQueries = {
	TypeID: 0,
	CurrencyID: 3,
};

// 0 - from server
// 1 - from search
// 2 - from query

// when to look what

// first render - server
// shallow route - query
// other - seearch

const Home = ({ query }: { query: ParsedUrlQuery }) => {
	const [search, setSearch] = useState<SearchTypes>({
		...defaultQueries,
		...query,
	});

	const renderCountRef = useRef(0);

	const { query: browserQuery } = useRouter();

	const pageRef = useRef(0);

	const searchAndQuery = useMemo(() => {
		// with server query
		if (renderCountRef.current === 0) {
			renderCountRef.current = 2;
			return {
				...search,
				...query,
			};
		}

		// with shallow route query
		if (renderCountRef.current === 1) {
			return {
				...search,
				...browserQuery,
			};
		}

		// search filters without any queries

		return search;
	}, [browserQuery]);

	const {
		data: products,
		fetchNextPage,
		fetchPreviousPage,
		hasNextPage,
		isFetchingNextPage,
		hasPreviousPage,
	} = useInfiniteQuery(
		["prods", searchAndQuery],
		(page) =>
			getProducts(
				{ ...search, ...browserQuery } as ParsedUrlQuery,
				page as { pageParam: number }
			),
		{
			getNextPageParam: ({ meta }) =>
				meta.current_page + 1 <= meta.last_page
					? meta.current_page + 1
					: undefined,
			getPreviousPageParam: ({ meta }) =>
				meta.current_page - 1 > 1 ? meta.current_page - 1 : undefined,
			staleTime: 1000 * 60 * 60,
			keepPreviousData: true,
		}
	);

	const { isLoading, data } = useQuery({
		queryKey: [
			"amount",
			{ ...search, ...(renderCountRef.current === 0 ? { browserQuery } : {}) },
			...(renderCountRef.current === 0 ? [browserQuery] : [{}]),
		],
		queryFn: ({ signal }) => getCount(search as ParsedUrlQuery, signal),
	});

	return (
		<>
			<Head>
				<meta name="description" content="Generated by create next app" />
				<meta name="title" content="MyAuto.ge" />
				<link rel="icon" href="/favicon.ico" />
				<title>MyAuto</title>
			</Head>

			<div className="flex flex-col items-start justify-start max-w-[104rem]  mx-auto mt-[3.2rem]">
				<BreadCrumb />

				<div className="flex gap-8 mt-8 w-full">
					<FiltersContainer
						isLoading={isLoading}
						search={search}
						query={query}
						setSearch={setSearch}
						foundAmount={data?.count ?? 0}
					/>

					<main className="flex flex-col flex-1">
						<ProductHeader
							foundAmount={data?.count ?? 0}
							handleRenderRef={() => {
								console.log("before", renderCountRef.current);
								renderCountRef.current = 0;
								console.log("after", renderCountRef.current);
							}}
						/>
						<button
							onClick={() => {
								pageRef.current--;
								fetchPreviousPage();
							}}
							disabled={!hasPreviousPage}
						>
							prev{" "}
						</button>
						<button
							onClick={() => {
								pageRef.current++;
								fetchNextPage();
							}}
							disabled={!hasNextPage || isFetchingNextPage}
						>
							next{" "}
						</button>
						<section className="flex flex-col md:gap-[1rem] w-full  mt-[1.6rem]">
							{(
								products?.pages[products.pages.length - 1] as ProductsResponse
							).items?.map((item: ProductType) => (
								<Card key={item.car_id} item={item} />
							))}
						</section>
					</main>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps = async ({
	query,
}: {
	query: ParsedUrlQuery;
}) => {
	const queryClient = new QueryClient();

	const search = {
		...defaultQueries,
		...query,
	};

	const queryKey = ["amount", search];

	await queryClient.prefetchQuery({
		queryKey,
		queryFn: () => getCount(search as any),
	});

	await queryClient.prefetchInfiniteQuery(
		["prods", search],
		() =>
			getProducts(search as any, {
				pageParam: 1,
			}),
		{
			initialData: {
				pageParams: [1],
				pages: [
					{
						items: [],
						meta: {
							current_page: 0,
							last_page: 1000,
							per_page: 30,
							total: 168000,
						},
					},
				],
			},
		}
	);

	// await queryClient.prefetchInfiniteQuery({
	// 	queryKey: ["prods", search],
	// 	queryFn: (e) =>
	// 		getProducts(search as any, { pageParam: e.pageParam.meta.current_page }),
	// 	initialPageParam: {
	// 		items: [],
	// 		meta: {
	// 			current_page: 0,
	// 			last_page: 1000,
	// 			per_page: 30,
	// 			total: 168000,
	// 		},
	// 	},
	// 	initialData: {
	// 		items: [],
	// 		meta: {
	// 			current_page: 0,
	// 			last_page: 1000,
	// 			per_page: 30,
	// 			total: 168000,
	// 		},
	// 	},
	// });

	return {
		props: {
			query,
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default Home;

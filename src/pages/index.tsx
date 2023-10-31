// import dynamic from "next/dynamic";
import React from "react";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import Head from "next/head";
// import { Suspense } from "react";

import { BreadCrumb } from "@/components/BreadCrumbs";

import { getCount } from "@/services/getCount";
import { ParsedUrlQuery } from "querystring";

import FiltersContainer from "@/components/filters/FiltersContainer";

// const FiltersContainer = dynamic(
// 	() => import("@/components/filters/FiltersContainer")
// );

export const getServerSideProps = async ({
	query,
}: {
	query: ParsedUrlQuery;
}) => {
	const queryClient = new QueryClient();
	const search = {
		TypeID: "0",
		CurrencyID: "3",
		...query,
	};
	const queryKey = ["amount", search];

	await queryClient.prefetchQuery({
		queryKey,
		queryFn: () => getCount(search as ParsedUrlQuery),
	});

	return {
		props: {
			query,
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const Home = ({ query }: { query: ParsedUrlQuery }) => {
	return (
		<>
			<Head>
				<meta name="description" content="Generated by create next app" />
				<meta name="title" content="MyAuto.ge" />
				<link rel="icon" href="/favicon.ico" />
				<title>MyAuto</title>
			</Head>
			<div className="flex flex-col items-start justify-start max-w-[146rem]  mx-auto mt-[3.2rem]">
				<BreadCrumb />

				<div className="flex gap-8 mt-8 w-full">
					{/* <Suspense fallback={<div>Loading...</div>}> */}
					<FiltersContainer query={query} />
					{/* </Suspense> */}
					<main className="border border-solid border-black-900 flex flex-1 ">
						<header></header>

						<section className="border border-solid bg-red-500 w-full"></section>
					</main>
				</div>
			</div>
		</>
	);
};

export default Home;

import "@/styles/globals.css";
import "@/styles/normalize.css";

import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { AppProps } from "next/app";

import { Header } from "@/components/Header";
import Head from "next/head";
import { useState } from "react";

const queryClientConfig = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 3,
			staleTime: Infinity,
		},
	},
};

const App = ({ Component, pageProps }: AppProps) => {
	const [queryClient] = useState(() => new QueryClient(queryClientConfig));
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<QueryClientProvider client={queryClient}>
				<HydrationBoundary state={pageProps.dehydratedState}>
					<Header />
					<Component {...pageProps} />
				</HydrationBoundary>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
};

export default App;

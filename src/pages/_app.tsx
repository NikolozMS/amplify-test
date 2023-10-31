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

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 3,
			staleTime: Infinity,
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
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
}

import React, { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header } from "@/components/Header";
import Head from "next/head";

import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/normalize.css";

const App = ({ Component, pageProps }: AppProps) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						retry: 3,
						staleTime: Infinity,
					},
				},
			})
	);
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<QueryClientProvider client={queryClient}>
				<Header />
				<Component {...pageProps} />
			</QueryClientProvider>
		</>
	);
};

export default App;

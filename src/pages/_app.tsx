import React from "react";

import type { AppProps } from "next/app";

import { Header } from "@/components/Header";
import Head from "next/head";

import "@/styles/globals.css";
import "@/styles/normalize.css";
import RootLayout from "@/components/Layout";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<RootLayout>
				<Header />
				<Component {...pageProps} />
			</RootLayout>
		</>
	);
};

export default App;

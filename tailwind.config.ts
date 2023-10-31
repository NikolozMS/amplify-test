import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				neue: ["neue"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				main: "#FD4100",
				primary: { 100: "#F2F3F6", 200: "#F9F9FB" },
				black: {
					400: "#9CA1AA",
					500: "#8C929B",
					600: "#6F7383",
					800: "#272A37",
					900: "#1B1D25",
				},
				gray: {
					100: "#C2C9D8",
					200: "#E2E5EB",
					300: "#D8DBE2",
				},
				red: {
					800: "#FF3B30",
				},
				green: {
					300: "#26B753",
					200: "#59D8C9",
					150: "#CEE8E5",
					800: "#1EB676",
				},
				blue: {
					500: "#4A6CFA",
				},
				yellow: {
					500: "#FEC900",
				},
			},
		},
	},
	plugins: [],
};
export default config;

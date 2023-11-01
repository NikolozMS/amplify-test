/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static.my.ge",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;

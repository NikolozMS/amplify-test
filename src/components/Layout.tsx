import { ReactNode } from "react";
import Provider from "./Providers";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ka">
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}

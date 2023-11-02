import { ReactNode } from "react";
import Provider from "./Providers";

export default function RootLayout({ children }: { children: ReactNode }) {
	return <Provider>{children}</Provider>;
}

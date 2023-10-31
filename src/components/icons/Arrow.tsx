import { CSSProperties } from "react";

type Props = { style?: CSSProperties };

export const Arrow = ({ style = {} }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="5"
		height="8"
		viewBox="0 0 5 8"
		fill="none"
		style={{ marginInline: 4, ...style }}
	>
		<path
			id="Vector 1"
			d="M1.2038 1L4.2038 4L1.2038 7"
			stroke="#6F7383"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

import { useRouter } from "next/router";
import React, { useState } from "react";

// 3 = gel

const Switch = ({
	handleFilterUpdate,
}: {
	handleFilterUpdate: (_newFilter: Object) => void;
}) => {
	const { query } = useRouter();
	const [isGel, setIsGel] = useState(query.CurrencyID === "3");

	const handleCheckboxChange = () => {
		handleFilterUpdate({ CurrencyID: isGel ? 1 : 3 });
		setIsGel((pr) => !pr);
	};

	return (
		<div
			className="w-[42px] h-[22px] bg-white rounded-3xl border border-solid border-gray-200 relative flex justify-between cursor-pointer"
			onClick={handleCheckboxChange}
		>
			<div
				className="w-[22px] h-[22px] bg-black-800 rounded-3xl duration-300 top-[-1px] left-[-1px] absolute -z-0"
				style={{
					transform: isGel ? "translateX(0px)" : "translateX(21px)",
				}}
				aria-hidden="true"
			/>
			<span
				className={`text-[1.6rem] z-[1] pl-[0.4rem] pt-[0.1rem] ${
					isGel ? "text-white" : "text-black-500"
				} `}
			>
				₾
			</span>
			<span
				className={`text-[1.6rem] z-[1]  pr-[0.4rem] pt-[0.1rem] ${
					isGel ? "text-black-500" : "text-white"
				}`}
			>
				$
			</span>
		</div>
	);
};

export default Switch;

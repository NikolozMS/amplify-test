import { ChangeEvent } from "react";
import Switcher from "../common/Switch";
import { useRouter } from "next/router";

const inputClassNames =
	"w-[9rem] h-[4rem] pl-[1rem] pt-[0.8rem] pr-[0.8rem] pb-[0.6rem] placeholder:text-black-500 border border-solid border-gray-300 rounded-[0.8rem] placeholder:text-[1.3rem]";

export const FiltersPriceRange = ({
	handleFilterUpdate,
}: {
	handleFilterUpdate: (_newFilter: Object) => void;
}) => {
	const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, valueAsNumber } = e.target;

		handleFilterUpdate({ [name]: valueAsNumber });
	};

	const { query } = useRouter();

	return (
		<div className="flex flex-col px-[2.4rem] mt-[1.6rem]">
			<div className="flex justify-between items-center">
				<span>ფასი</span>
				<div>
					<Switcher handleFilterUpdate={handleFilterUpdate} />
				</div>
			</div>
			<div className="flex justify-between items-center mt-[1.8rem]">
				<input
					onChange={handlePriceChange}
					name="PriceFrom"
					type="number"
					className={inputClassNames}
					placeholder="დან"
					defaultValue={query?.PriceFrom || ""}
				/>
				<span className="text-black-500 font-bold">-</span>
				<input
					name="PriceTo"
					type="number"
					onChange={handlePriceChange}
					className={inputClassNames}
					placeholder="მდე"
					defaultValue={query?.PriceTo || ""}
				/>
			</div>
		</div>
	);
};

import { Checkbox } from "../icons/Checkbox";
import { PriceCalculator } from "./PriceCalculator";
import { StatusBadge } from "./StatusBadge";
import { Title } from "./Title";

export const MobileHeading = ({
	usd,
	gel,
	year,
	customs_passed,
	status_id,
}: {
	usd: number;
	gel: number;
	year: number;
	customs_passed: boolean;
	status_id: number;
}) => {
	return (
		<header className="md:hidden flex flex-col">
			<div className="flex justify-start items-center">
				<StatusBadge status={status_id} />
				<Title year={year} />
			</div>
			<div className="flex justify-between items-center">
				<div className="mt-[.8rem]">
					<PriceCalculator usd={usd} gel={gel} />
				</div>
				{customs_passed ? (
					<div className="flex items-center rounded-[.6rem] bg-green-50 text-[1rem] px-[.9rem] py-[.5rem] mt-2">
						<span className="flex items-center text-[1.1rem] text-green-800">
							<Checkbox />
							განბაჟებული
						</span>
					</div>
				) : (
					<div className="flex items-center rounded-[.6rem] bg-red-100  px-[.9rem] py-[.5rem] mt-2">
						<span className="flex items-center text-[1.1rem] text-red-800 ">
							განუბაჟებელი
						</span>
					</div>
				)}
			</div>
		</header>
	);
};

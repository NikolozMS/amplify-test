import { PriceCalculator } from "./PriceCalculator";

export const MobilePriceAndCustoms = ({
	usd,
	gel,
}: {
	usd: number;
	gel: number;
}) => (
	<div className="flex justify-between">
		<PriceCalculator usd={usd} gel={gel} />
	</div>
);

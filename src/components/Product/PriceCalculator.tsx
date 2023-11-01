import { getPrice } from "@/utils/getPrice";
import { useRouter } from "next/router";

export const PriceCalculator = ({ usd, gel }: { usd: number; gel: number }) => {
	const { query } = useRouter();
	const price = getPrice({
		usd,
		gel,
		currency: query.CurrencyID as string,
	});
	return (
		<div className="flex items-center gap-2">
			<span
				className={`${
					price === "ფასი შეთანხმებით" ? "text-[1rem]" : "text-[2rem]"
				}`}
			>
				{price}
			</span>
			{price !== "ფასი შეთანხმებით" && (
				<span className="text-[1.6rem] px-[1rem] py-[.5rem] bg-gray-50 rounded-full">
					{query.CurrencyID === "1" ? "$" : "₾"}
				</span>
			)}
		</div>
	);
};

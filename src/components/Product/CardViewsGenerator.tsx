import { formatTimeDifference } from "@/utils/formatTimeDifference";

export const CardViewsGenerator = ({
	views,
	order_date,
}: {
	views: number;
	order_date: string;
}) => (
	<>
		<span className="text-[1.2rem] text-black-600"> {views} ნახვა </span>
		<span className="inline-flex w-[2px] h-[2px] round-full bg-[#8996ae] mx-[6px] "></span>
		<span className="text-[1.2rem] text-black-600">
			{formatTimeDifference(order_date)}{" "}
		</span>
	</>
);

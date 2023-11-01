import { formatTimeDifference } from "@/utils/formatTimeDifference";

const vipStatuses = {
	1: "S-VIP",
};

export const StatusAndViews = ({
	views,
	status_id,
	order_date,
}: {
	views: number;
	status_id: number;
	order_date: string;
}) => (
	<footer className="hidden md:block md:mt-auto">
		<div className="flex items-center">
			<p className="bg-main flex items-center rounded-full font-bold text-[1rem] text-white text-uppercase h-[2rem] px-[1rem] py-[0.3rem] mr-[1.6rem] whitespace-nowrap">
				{vipStatuses[status_id as keyof typeof vipStatuses]}
			</p>
			<span className="text-[1.2rem] text-black-600"> {views} ნახვა </span>
			<span className="inline-flex w-[2px] h-[2px] round-full bg-[#8996ae] mx-[8px] "></span>
			<span className="text-[1.2rem] text-black-600">
				{formatTimeDifference(order_date)}{" "}
			</span>
		</div>
	</footer>
);

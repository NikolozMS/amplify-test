import { Edit } from "../icons/Edit";
import { Hot } from "../icons/Hot";
import { Shape } from "../icons/Shape";
import { CardViewsGenerator } from "./CardViewsGenerator";

export const MobileCardFooter = ({
	views,
	order_date,
}: {
	views: number;
	order_date: string;
}) => {
	return (
		<div className="relative flex justify-between">
			<hr className="absolute left-[-1.6rem] w-screen border-black-200 " />
			<div className="flex justify-start w-full items-center gap-4 mt-6">
				<Hot />
				<span className="flex items-center pt-1">
					<CardViewsGenerator order_date={order_date} views={views} />
				</span>
			</div>
			<div className="flex items-center gap-[1.6rem] mt-6">
				<Shape />
				<Edit />
			</div>
		</div>
	);
};

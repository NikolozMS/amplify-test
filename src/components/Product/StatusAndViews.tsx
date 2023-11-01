import { Favorite } from "../icons/Favorite";
import { Note } from "../icons/Note";
import { Shape } from "../icons/Shape";
import { CardViewsGenerator } from "./CardViewsGenerator";
import { StatusBadge } from "./StatusBadge";

export const StatusAndViews = ({
	views,
	status_id,
	order_date,
}: {
	views: number;
	status_id: number;
	order_date: string;
}) => (
	<footer className="mt-auto">
		<div className="flex items-center justify-between">
			<div className="flex items-center">
				<StatusBadge status={status_id} />
				<CardViewsGenerator order_date={order_date} views={views} />
			</div>
			<div className="flex items-center gap-[1.6rem]">
				<Note />
				<Shape fill="#6F7383" />
				<Favorite />
			</div>
		</div>
	</footer>
);

import { Dispatch, SetStateAction } from "react";
import { BikeIcon } from "../icons/Bike";
import { CarIcon } from "../icons/Car";
import { TractorIcon } from "../icons/Tractor";
import { SearchTypes } from "@/types/searchTypes";

const commonStyles =
	"flex items-center justify-center flex-1 h-[4.7rem] cursor-pointer";

const calculateBefore = (active: number) => {
	if (active === 0) {
		return "before:left-[0%]";
	}

	if (active === 1) {
		return "before:left-[33.5%]";
	}

	if (active === 2) {
		return "before:left-[66.9%]";
	}
};

export const FiltersHeader = ({
	setSearch,
	search,
}: {
	setSearch: Dispatch<SetStateAction<SearchTypes>>;
	search: SearchTypes;
}) => {
	const handleClick = (index: number) => {
		setSearch((prev) => ({
			TypeID: index,
			CurrencyID: prev.CurrencyID,
		}));
	};

	return (
		<figure
			className={`flex divide-x before:duration-300 relative border-b before:absolute before:bottom-0 before:h-[1px] before:w-[33%] before:bg-main ${calculateBefore(
				+search.TypeID!
			)}`}
		>
			<div className={commonStyles} onClick={() => handleClick(0)}>
				<CarIcon fill={+search.TypeID! === 0 ? "#FD4100" : "#8c929b"} />
			</div>
			<div className={commonStyles} onClick={() => handleClick(1)}>
				<TractorIcon fill={+search.TypeID! === 1 ? "#FD4100" : "#8c929b"} />
			</div>
			<div className={commonStyles} onClick={() => handleClick(2)}>
				<BikeIcon fill={+search.TypeID! === 2 ? "#FD4100" : "#8c929b"} />
			</div>
		</figure>
	);
};

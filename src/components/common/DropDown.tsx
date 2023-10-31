import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Arrow } from "../icons/Arrow";
import { Category } from "@/types/CategoryType";
import { ManufacturerType } from "@/types/ManufacturerType";
import { PeriodAndSortType } from "@/types/PeriodsType";

type SellOrRent = {
	id: number;
	title: string;
};

type Props = {
	input?: string;
	label?: string;
	data?: Category[] | ManufacturerType[] | SellOrRent[] | PeriodAndSortType[];
	setFormInputs?: Dispatch<SetStateAction<any>>;
	titleKey: any;
	idKey: any;
	searchString?: string;
	typeId?: number;
};

export const DropDown = ({
	input,
	label,
	data,
	setFormInputs,
	titleKey,
	idKey,
	searchString,
	typeId,
}: Props) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectPlaceHolder, setSelectPlaceHolder] = useState(input);

	useEffect(() => {
		setSelectPlaceHolder(input);
	}, [input, typeId]);

	const changeDropdownText = (el: string, id: string) => {
		setSelectPlaceHolder(el);
		if (setFormInputs && searchString) {
			setFormInputs({ [searchString]: id });
		}
		setIsDropdownOpen(false);
	};

	const inputClassname = label
		? "absolute top-[3.7rem] pointer-events-none right-6"
		: "absolute top-[1.7rem] pointer-events-none right-4";

	return (
		<div className="relative sm:max-w-[397px] w-full cursor-pointer ">
			{label && (
				<p
					className="text-[1.2rem] pb-[0.8rem]"
					onClick={() => setIsDropdownOpen((prev) => !prev)}
				>
					{label}
				</p>
			)}
			<div
				className={`border border-solid border-gray-300 h-[4rem] text-black-900 text-[1.3rem] rounded-xl p-5 pt-[1.1rem] pr-[.8rem]`}
				onClick={() => setIsDropdownOpen((prev) => !prev)}
			>
				{selectPlaceHolder}
			</div>
			<span className={`${inputClassname} ${isDropdownOpen && "rotate-180"}`}>
				<Arrow style={{ transform: "rotate(90deg)" }} />
			</span>
			<ul
				className={`absolute bg-white shadow-md py-[1rem] border border-solid border-gray-200 flex-col w-full z-40 top-[7rem] rounded-xl duration-300 overflow-hidden origin-top  ${
					isDropdownOpen ? "scale-y-100" : "scale-y-0"
				}`}
				onMouseLeave={() => setIsDropdownOpen(false)}
			>
				{data?.map((el) => (
					<li
						key={el[idKey as keyof typeof el]}
						className="min-h-[3.2rem] hover:text-black-800 leading-[3.2rem] text-black-600 text-[14px] pl-[15px] bg-white hover:bg-primary-100 duration-300"
						onClick={() =>
							changeDropdownText(
								el[titleKey as keyof typeof el],
								el[idKey as keyof typeof el]
							)
						}
					>
						{el[titleKey as keyof typeof el]}
					</li>
				))}
			</ul>
		</div>
	);
};

import { getCategories } from "@/services/getCategories";
import { getManufacturers } from "@/services/getManufacturers";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useMemo } from "react";

const sellOrRent = {
	0: "იყიდება",
	1: "ქირავდება",
};

const sortStrings = {
	"1": "თარიღი კლებადი",
	"2": "თარიღი ზრდადი",
	"3": "ფასი კლებადი",
	"4": "ფასი ზრდადი",
	"5": "გარბენი კლებადი",
	"6": "გაარბენი ზრდადი",
};

export const SearchChips = () => {
	const { query } = useRouter();

	const { data: categories } = useQuery(["categories"], getCategories);

	const { data: manufacturers } = useQuery(["manufacturers"], getManufacturers);

	const chips = useMemo(() => {
		const chips = [];

		if (query.ForRent) {
			chips.push(
				sellOrRent[query.ForRent as unknown as keyof typeof sellOrRent]
			);
		} else {
			chips.push("იყიდება");
		}

		const manChip = manufacturers?.find((man) => {
			if (query.Mans) return man.man_id.toString() === query.Mans;
		});

		if (manChip) {
			chips.push(manChip.man_name);
		}

		const catChip = categories?.find((cat) => {
			if (query.Cats) return cat.category_id.toString() === query.Cats;
		});

		if (catChip) {
			chips.push(catChip.title);
		}

		if (query.SortOrder) {
			chips.push(
				sortStrings[query.SortOrder as unknown as keyof typeof sortStrings]
			);
		}

		return chips;
	}, [categories, manufacturers]);

	return (
		<div className="flex items-center pl-[1.3rem] overflow-x-scroll w-full h-[6.4rem] md:hidden">
			{chips.map((chip) => (
				<span
					style={{ boxShadow: " 0px 3px 21px 0px rgba(39, 42, 55, 0.04)" }}
					className="flex items-center justify-center rounded-[100px] bg-white text-[1.2rem] text-black-700 h-[3.2rem] px-[1.2rem] mr-[.8rem]"
				>
					{chip}
				</span>
			))}
		</div>
	);
};

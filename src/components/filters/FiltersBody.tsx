import { useMemo } from "react";

import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services/getCategories";
import { getManufacturers } from "@/services/getManufacturers";

import { DropDown } from "../common/DropDown";
import { FiltersPriceRange } from "./PriceRange";

import { SearchTypes } from "@/types/searchTypes";

const sellOrRent = [
	{ id: 0, title: "იყიდება" },
	{ id: 1, title: "ქირავდება" },
];

const manufacturersStyles = {
	0: "is_car",
	1: "is_spec",
	2: "is_moto",
};

// TypeID - moto/maanqana/car
// ForRent= - იყიდება ქირაავდება 0-1
// Mans= მწარმოეებლის აიდი    მწარმოებელი.მოდელი
// CurrencyID= - ლარ/დოლარი
// Page=
// Cats= -- კატეგორია

export const FiltersBody = ({
	handleFilterUpdate,
	search,
}: {
	handleFilterUpdate: (_newFilter: Object) => void;
	search: SearchTypes;
}) => {
	const categories = useQuery({
		queryKey: ["categories"],
		queryFn: getCategories,
	});
	const manufacturers = useQuery({
		queryKey: ["manufacturers"],
		queryFn: getManufacturers,
	});

	const initialValues = useMemo(() => {
		let foundMan, foundCat, foundType;
		if (search.Mans) {
			foundMan = manufacturers.data?.find(
				(man) => man.man_id.toString() === search.Mans?.toString()
			);
		}

		if (search.Cats) {
			foundCat = categories.data?.find(
				(cat) => cat.category_id.toString() === search.Cats?.toString()
			);
		}

		if (search.ForRent) {
			foundType = sellOrRent.find(
				(type) => type.id.toString() === search.ForRent?.toString()
			);
		}

		return {
			manValue: foundMan?.man_name || "ყველა მწარმოებელი",
			catValue: foundCat?.title || "ყველა კატეგორია",
			typeVal: foundType?.title || "აირჩიეთ ტიპი",
		};
		// @ts-ignore
	}, [manufacturers.data?.length, categories.data?.length, search.TypeID]);

	const compatibleFIlters = useMemo(() => {
		const typeId = search.TypeID;

		const filteredType =
			manufacturersStyles[
				typeId as unknown as keyof typeof manufacturersStyles
			];

		const mansCompatibleFilters = manufacturers?.data?.filter(
			(man) => man[filteredType as keyof typeof man] === "1"
		);

		const catsCompatibleFilters = categories.data?.filter(
			(cat) => cat.category_type.toString() === search.TypeID!.toString()
		);

		return { mansCompatibleFilters, catsCompatibleFilters };
		// @ts-ignore
	}, [search.TypeID, manufacturers.data?.length, categories.data?.length]);

	return (
		<div className="flex flex-col  pt-[2.2rem]">
			<div className="flex flex-col px-[2.4rem] gap-[2rem]">
				<DropDown
					data={sellOrRent}
					titleKey="title"
					idKey="id"
					setFormInputs={handleFilterUpdate}
					input={initialValues.typeVal}
					label="გარიგების ტიპი"
					searchString="ForRent"
					typeId={search.TypeID}
				/>
				<DropDown
					data={compatibleFIlters.mansCompatibleFilters}
					titleKey="man_name"
					idKey="man_id"
					setFormInputs={handleFilterUpdate}
					input={initialValues.manValue}
					label="მწარმოებელი"
					searchString="Mans"
					typeId={search.TypeID}
				/>
				<DropDown
					data={compatibleFIlters.catsCompatibleFilters}
					titleKey="title"
					idKey="category_id"
					setFormInputs={handleFilterUpdate}
					input={initialValues.catValue}
					label="კატეგორია"
					searchString="Cats"
					typeId={search.TypeID}
				/>
			</div>
			<hr className="mt-[2.4rem] bg-gray-100" />
			<div>
				<FiltersPriceRange handleFilterUpdate={handleFilterUpdate} />
			</div>
		</div>
	);
};

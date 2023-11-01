import { DropDown } from "../common/DropDown";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { objectToQueryString } from "@/utils/objectToQueryString";

const periods = [
	{ label: "ბოლო 1 საათი", value: "1h" },
	{ label: "ბოლო 2 საათი", value: "2h" },
	{ label: "ბოლო 3 საათი", value: "3h" },
	{ label: "ბოლო დღე", value: "1d" },
	{ label: "ბოლო 2 დღე", value: "2d" },
	{ label: "ბოლო 3 დღე", value: "3d" },
	{ label: "ბოლო კვირა", value: "1w" },
	{ label: "ბოლო 2 კვირა", value: "2w" },
	{ label: "ბოლო 3 კვირა", value: "3w" },
];

const sortOrder = [
	{ label: "თარიღი კლებადი", value: "1" },
	{ label: "თარიღი ზრდადი", value: "2" },
	{ label: "ფასი კლებადი", value: "3" },
	{ label: "ფასი ზრდადი", value: "4" },
	{ label: "გარბენი კლებადი", value: "5" },
	{ label: "გაარბენი ზრდადი", value: "6" },
];

export const ProductHeader = ({ foundAmount }: { foundAmount: number }) => {
	const { push, query } = useRouter();

	const initialValues = useMemo(() => {
		let values: Record<string, string> = {};

		if (query.SortOrder) {
			const foundOrder = sortOrder.find(
				(order) => order.value === query.SortOrder
			);
			values["SortOrder"] = foundOrder?.label as string;
		} else {
			values["SortOrder"] = "სორტირება";
		}

		if (query.Period) {
			const foundPeriod = periods.find(
				(period) => period.value === query.Period
			);
			values["Period"] = foundPeriod?.label as string;
		} else {
			values["Period"] = "განთავსების დრო";
		}

		return values;
	}, [query.Period, query.SortOrder]);

	return (
		<header className="hidden w-full md:flex justify-between items-center">
			<h5 className="text-[1.6rem] text-black-800">{foundAmount} განცხადება</h5>
			<div className="flex items-center gap-[0.8rem] w-[33rem]">
				<DropDown
					data={periods}
					titleKey="label"
					idKey="value"
					label=""
					input={initialValues.Period}
					searchString="Period"
					setFormInputs={(newFilter) => {
						const queryObj = {
							...query,
						};

						queryObj.Period = newFilter.Period;
						const qs = objectToQueryString(queryObj);

						push(`/?${qs}`, undefined, {
							shallow: true,
						});
					}}
				/>
				<DropDown
					data={sortOrder}
					titleKey="label"
					idKey="value"
					label=""
					input={initialValues.SortOrder}
					searchString="SortOrder"
					setFormInputs={(newFilter) => {
						const queryObj = {
							...query,
						};

						queryObj.SortOrder = newFilter.SortOrder;
						const qs = objectToQueryString(queryObj);

						push(`/?${qs}`, undefined, {
							shallow: true,
						});
					}}
				/>
			</div>
		</header>
	);
};

import { useRouter } from "next/router";
import { Engine } from "../icons/Engine";
import { Gear } from "../icons/Gear";
import { Speed } from "../icons/Speed";
import { Wheel } from "../icons/Wheel";
import { ProductType } from "@/types/ProductType";

const optionsStyles =
	"text-[1.2rem] text-black-900 flex items-center gap-[1.2rem] w-[50%] md:w-[18.2rem] mb-[.6rem] md:mb-0";

const fuelTypes = {
	2: "ბენზინი",
	3: "დიზელი",
	6: "ჰიბრიდი",
	7: "ელეტრო",
};

const gearTypes = {
	1: "მექანიკა",
	2: "ავტომატიკა",
	3: "ტიპტრონიკი",
	4: "ვარიატორი",
};

const getPrice = ({
	usd,
	gel,
	currency,
}: {
	usd: number;
	gel: number;
	currency: string;
}) => {
	if (!usd && !gel) {
		return "ფასი შეთანხმებით";
	}

	if (currency === "1") {
		return new Intl.NumberFormat("ja-JP").format(usd);
	}

	return new Intl.NumberFormat("ja-JP").format(gel);
};

export const CarFeaturesAndPrice = ({ item }: { item: ProductType }) => {
	const { query } = useRouter();

	const price = getPrice({
		usd: item.price_usd,
		gel: item.price_value,
		currency: query.CurrencyID as string,
	});

	return (
		<div className="flex justify-between md:mt-[2.4rem]">
			<div className="flex justify-between flex-wrap md:w-[40rem] md:gap-[2rem]">
				<span className={optionsStyles}>
					<Engine />{" "}
					{`${(item.engine_volume / 1000).toFixed(1)} ${
						fuelTypes[item.fuel_type_id as keyof typeof fuelTypes]
					}`}
				</span>
				<span className={optionsStyles}>
					<Speed />
					{item.car_run} კმ
				</span>
				<span className={`${optionsStyles} pl-[2.5px]`}>
					<Gear /> {gearTypes[item.gear_type_id as keyof typeof gearTypes]}
				</span>
				<span className={optionsStyles}>
					<Wheel />
					{item.right_wheel ? "მარჯვენა" : "მარცხენა"}
				</span>
			</div>
			<div className="hidden md:flex items-center gap-2">
				<span
					className={`${
						price === "ფასი შეთანხმებით" ? "text-[1rem]" : "text-[2rem]"
					}`}
				>
					{price}
					{/* {query.CurrencyID === "1" ? item.price_usd : item.price_value}{" "} */}
				</span>
				{price !== "ფასი შეთანხმებით" && (
					<span className="text-[1.6rem] px-[1rem] py-[.5rem] bg-gray-50 rounded-full">
						{query.CurrencyID === "1" ? "$" : "₾"}
					</span>
				)}
			</div>
		</div>
	);
};

import { Engine } from "../icons/Engine";
import { Gear } from "../icons/Gear";
import { Speed } from "../icons/Speed";
import { Wheel } from "../icons/Wheel";
import { ProductType } from "@/types/ProductType";
import { PriceCalculator } from "./PriceCalculator";
import { fuelTypes, gearTypes } from "@/utils/staticData";

const optionsStyles =
	"text-[1.2rem] text-black-900 flex items-center gap-[1.2rem] w-[50%] md:w-[18.2rem] mb-[.6rem] md:mb-0";

export const CarFeaturesAndPrice = ({ item }: { item: ProductType }) => {
	return (
		<div className="flex justify-between mt-[2.4rem]">
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

			<PriceCalculator usd={item.price_usd} gel={item.price_value} />
		</div>
	);
};

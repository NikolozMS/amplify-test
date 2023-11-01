import { ProductType } from "@/types/ProductType";
import { Geo } from "../icons/Geo";
import { fuelTypes, gearTypes } from "@/utils/staticData";

const optionsStyles =
	"text-[1.2rem] text-black-900 flex items-center gap-[1.2rem] min-w-[50%] md:w-[18.2rem] mb-[.7rem] md:mb-0";

export const MobileCarFeaturesAndLocations = ({
	item,
}: {
	item: ProductType;
}) => {
	return (
		<div className="flex justify-between mb-[1.4rem] mt-[.6rem] w-full">
			<div className="flex justify-between flex-wrap w-full">
				<span className={optionsStyles}>{item.car_run} კმ</span>
				<span className={optionsStyles}>ცილინდრები {item.cylinders}</span>

				<span className={optionsStyles}>
					{`${(item.engine_volume / 1000).toFixed(1)} ${
						fuelTypes[item.fuel_type_id as keyof typeof fuelTypes]
					}`}
				</span>
				<span className={optionsStyles}>
					საჭე {item.right_wheel ? "მარჯვნივ" : "მარცხნივ"}
				</span>
				<span className={`${optionsStyles} `}>
					{gearTypes[item.gear_type_id as keyof typeof gearTypes]}
				</span>
				<span className={optionsStyles}>
					<Geo />
					<span className="ml-[-2px] text-[1.2rem] text-black-600">
						საქართველო
					</span>
				</span>
			</div>
		</div>
	);
};

import { Checkbox } from "../icons/Checkbox";
import { Geo } from "../icons/Geo";
import { USA } from "../icons/USA";
import { Title } from "./Title";

export const TitleAndLocation = ({
	prod_year,
	customs_passed,
}: {
	prod_year: number;
	customs_passed: boolean;
}) => (
	<header className="flex justify-between">
		<Title year={prod_year} />

		<div>
			{customs_passed ? (
				<div className="flex items-center">
					<span className="flex items-center text-[1.1rem] text-green-300">
						<Checkbox />
						განბაჟებული
					</span>
					<Geo style={{ marginLeft: 16, marginRight: 8 }} />
					<span className="text-[1.2rem] text-black-600">საქართველო</span>
				</div>
			) : (
				<div className="flex items-center">
					<span className="text-[1.1rem] text-red-800">განუბაჟებელი</span>
					<USA />
					<span className="text-[1.2rem] text-black-600">აშშ</span>
				</div>
			)}
		</div>
	</header>
);

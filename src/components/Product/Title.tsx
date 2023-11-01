export const Title = ({
	year,
	name = "Hyundai Veloster 356",
}: {
	year: number;
	name?: string;
}) => (
	<h2 className="text-[1.4rem] text-black-800">
		{name} <span className="text-[1.4rem] text-black-500">{year} წ</span>
	</h2>
);

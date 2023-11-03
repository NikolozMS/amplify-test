export const FiltersAction = ({
	foundAmount = 0,
	onSubmit,
	isLoading,
}: {
	foundAmount?: number;
	isLoading: boolean;
	onSubmit: () => void;
}) => (
	<div
		style={{ boxShadow: "0px 2px 16px 0px rgba(39, 42, 55, 0.13)" }}
		className="h-[6.8rem] px-[2.4rem] mt-auto flex justify-center items-center"
	>
		<button
			onClick={onSubmit}
			className="bg-main w-full h-[3.2rem] rounded-[.6rem] text-[1.4rem] text-white"
			disabled={isLoading}
		>
			ძებნა {isLoading ? "..." : foundAmount}
		</button>
	</div>
);

const vipStatuses = {
	1: "S-VIP",
};

export const StatusBadge = ({ status }: { status: number }) => (
	<p className="bg-main flex items-center rounded-full font-bold text-[1rem] text-white text-uppercase h-[2rem] px-[1rem] py-[0.3rem] mr-[.8rem] md:mr-[1.6rem] whitespace-nowrap">
		{vipStatuses[status as keyof typeof vipStatuses]}
	</p>
);

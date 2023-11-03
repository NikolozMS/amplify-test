export const getPrice = ({
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
		return new Intl.NumberFormat().format(usd);
	}

	return new Intl.NumberFormat().format(gel);
};

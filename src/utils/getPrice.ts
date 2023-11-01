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

	if (currency === "1" && usd < 1000) {
		return usd;
	}

	if (currency === "3" && gel < 1000) {
		return gel;
	}

	if (currency === "1") {
		return new Intl.NumberFormat("ja-JP").format(usd);
	}

	return new Intl.NumberFormat("ja-JP").format(gel);
};

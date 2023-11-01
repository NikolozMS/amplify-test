export const formatTimeDifference = (dateString: string) => {
	const targetDate = new Date(dateString);
	const currentDate = new Date();

	const timeDifference = Math.abs(currentDate - targetDate); // Difference in milliseconds

	const minutesDifference = Math.floor(timeDifference / (1000 * 60));
	const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
	const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

	if (minutesDifference < 60) {
		return `${minutesDifference} წუთის წინ`;
	} else if (hoursDifference < 24) {
		return `${hoursDifference} საათის წინ`;
	} else {
		return `${daysDifference} დღის წინ`;
	}
};

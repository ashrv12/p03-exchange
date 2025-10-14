import { query } from './_generated/server';

function isDayOfMonthGreaterThan12(): boolean {
	const today = new Date();
	const dayOfMonth = today.getDate(); // Returns the day of the month (1-31)

	return dayOfMonth > 12;
}

// this is for when the function isDayOfMonthGreaterThan12 returns true
function getPreviousMonth(): string {
	const now = new Date();
	// Set the date to the first day of the current month to avoid issues
	// when the current day is after the number of days in the previous month
	now.setDate(1);
	now.setMonth(now.getMonth() - 1); // Go back one month

	const year = now.getFullYear();
	const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Add 1 because getMonth() is 0-indexed

	return `${year}-${month}`;
}

// this is for when the function isDayOfMonthGreaterThan12 returns false
function getTwoMonthsAgo(): string {
	const now = new Date();
	// Set the date to the first day of the current month to avoid issues
	// when the current day is after     the number of days in the previous month
	now.setDate(1);
	now.setMonth(now.getMonth() - 2); // Go back one month

	const year = now.getFullYear();
	const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Add 1 because getMonth() is 0-indexed

	return `${year}-${month}`;
}

export const getLatestExport = query({
	args: {},
	// since args are empty i just omit it for eslint
	handler: async (ctx, _) => {
		// we check if the day is greater than the 12th of the given month
		// we must do this check because the national statistics agency of mongolia
		// usually uploads the previous month's export data around the 8th to 10th day
		// of the month. no consistency smh T-T
		if (isDayOfMonthGreaterThan12()) {
			const latestMonth = await ctx.db
				.query('monthlyExports')
				.withIndex('by_report_date', (q) => q.eq('reportDate', getPreviousMonth()))
				.first();

			return latestMonth;
		}

		const latestMonth = await ctx.db
			.query('monthlyExports')
			.withIndex('by_report_date', (q) => q.eq('reportDate', getTwoMonthsAgo()))
			.first();

		return latestMonth;
	}
});

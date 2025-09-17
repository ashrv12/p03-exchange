import { type Load } from '@sveltejs/kit';

export const load: Load = async (event) => {
	const oneDayMs = 24 * 60 * 60 * 1000;
	const yesterday = new Date(Date.now() - oneDayMs);

	const formatted = yesterday.toISOString().split('T')[0];

	const request = new Request(
		`https://www.mongolbank.mn/mn/currency-rates/data?startDate=${formatted}&endDate=${formatted}`,
		{
			method: 'POST'
		}
	);

	const response = await fetch(request);

	const data = await response.json();

	if (!response.ok) {
		return {
			status: response.status,
			data: null
		};
	}

	return {
		status: response.status,
		rates: data.data[0]
	};
};

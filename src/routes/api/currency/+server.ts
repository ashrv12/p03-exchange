import { json } from '@sveltejs/kit';

export async function GET() {
	// Use local Mongolian date
	const formatted = new Date().toLocaleDateString('en-CA', {
		timeZone: 'Asia/Ulaanbaatar'
	});

	try {
		const golomtApi = `https://www.golomtbank.com/api/exchange?date=${formatted.replaceAll('-', '')}`;
		const golomtResponse = await fetch(golomtApi);

		if (!golomtResponse.ok) {
			return json(
				{ error: `Upstream request failed: ${golomtResponse.status}` },
				{ status: golomtResponse.status }
			);
		}

		const golomtRates = await golomtResponse.json();

		return json({
			golomtRates
		});
	} catch (error) {
		console.error('Fetch Error:', error);

		return json({ error: 'Failed to fetch Golomt Bank exchange rates' }, { status: 500 });
	}
}

<script lang="ts">
	import MedalBronze from '../svgs/medal_bronze.svelte';
	import MedalGold from '../svgs/medal_gold.svelte';
	import MedalSilver from '../svgs/medal_silver.svelte';

	const sample = {
		title: 'Breakthrough in Renewable Energy Storage Announced',
		description:
			'Scientists at the Global Energy Institute have developed a new battery technology that promises to revolutionize renewable energy storage, offering significantly longer lifespans and faster charging times.',
		content: 'A groundbreaking discovery in the field of energy storage was announced.',
		created_at: '2025-10-04T10:30:00Z',
		author: {
			name: 'Jane Doe',
			email: 'jane.doe@example.com',
			image_url: 'https://example.com/images/jane_doe.jpg'
		}
	};
</script>

<div
	class="flex h-full w-full flex-col gap-y-2 rounded-lg border-t-[1px] border-b-[1px] border-[#404040]/25 p-2"
>
	<a href="/" class="flex flex-col">
		<h1 class="text-md font-bold"><u>{sample.title}</u></h1>
		<p class="line-clamp-2 text-xs opacity-75">{sample.description}</p>
	</a>
	<a href="/" class="flex flex-col">
		<h1 class="text-md font-bold"><u>{sample.title}</u></h1>
		<p class="line-clamp-2 text-xs opacity-75">{sample.description}</p>
	</a>
	<a href="/" class="flex flex-col">
		<h1 class="text-md font-bold"><u>{sample.title}</u></h1>
		<p class="line-clamp-2 text-xs opacity-75">{sample.description}</p>
	</a>
</div>

<div
	class="flex h-full w-full justify-between gap-x-3 rounded-lg border-[1px] border-[#404040]/25 p-3 hover:outline hover:outline-[#1A1A1A]"
>
	<div class="flex h-full flex-col items-center gap-y-3">
		<h1 class="text-xl font-black"><u>YouTube</u></h1>
		<div class="flex gap-x-2 text-lg">
			<MedalGold />
			<h1>PewDiePie 100m</h1>
		</div>
		<div class="flex gap-x-2">
			<MedalSilver />
			<h1>PewDiePie 100m</h1>
		</div>
		<div class="flex gap-x-2 text-sm">
			<MedalBronze />
			<h1>PewDiePie 100m</h1>
		</div>
	</div>
	<div class="flex h-full flex-col items-center gap-y-3">
		<h1 class="text-xl font-black"><u>Instagram</u></h1>
		<div class="flex gap-x-2 text-lg">
			<MedalGold />
			<h1>PewDiePie 10m</h1>
		</div>
		<div class="flex gap-x-2">
			<MedalSilver />
			<h1>PewDiePie 5m</h1>
		</div>
		<div class="flex gap-x-2 text-sm">
			<MedalBronze />
			<h1>PewDiePie 125k</h1>
		</div>
	</div>
</div>

<div
	class="h-full w-full rounded-lg border-[1px] border-[#404040]/25 p-3 hover:outline hover:outline-[#1A1A1A]"
>
	<h1 class="text-xl font-semibold">Local spots</h1>
</div>

<script>
	import Globe from '../svgs/globe.svelte';
	import House from '../svgs/house.svelte';
	import LocationPin from '../svgs/location_pin.svelte';
	import Money from '../svgs/money.svelte';
	import Newspaper from '../svgs/newspaper.svelte';
	import Plane from '../svgs/plane.svelte';
	import QuestPin from '../svgs/quest_pin.svelte';
	import Statistics from '../svgs/statistics.svelte';
	import Trophy from '../svgs/trophy.svelte';
</script>

<div class="relative flex h-full w-[15%] flex-col border px-1">
	<!-- Location -->
	<div class="flex h-[6%] w-full items-center gap-x-2">
		<LocationPin />
		<h3 class="text-lg">Mongolia</h3>
	</div>
	<!-- Menu -->
	<div class="flex flex-col gap-y-1">
		<!-- Home -->
		<a href="/" class="flex items-center gap-x-2 rounded-md bg-[#434343] px-1">
			<House />
			<h3 class="text-lg">Home</h3>
		</a>
		<!-- Statistics -->
		<a href="/statistics" class="flex items-center gap-x-2 px-1">
			<Statistics />
			<h3 class="text-lg">Statistics</h3>
		</a>
		<!-- News Feed -->
		<a href="/news-feed" class="flex items-center gap-x-2 px-1">
			<Newspaper />
			<h3 class="text-lg">News Feed</h3>
		</a>
		<!-- Leaderboard -->
		<a href="/leaderboard" class="flex items-center gap-x-2 px-1">
			<Trophy />
			<h3 class="text-lg">Leaderboard</h3>
		</a>
		<!-- Global Feed -->
		<a href="/global-feed" class="flex items-center gap-x-2 px-1">
			<Globe />
			<h3 class="text-lg">Global Feed</h3>
		</a>
		<!-- Exports -->
		<a href="/exports" class="flex items-center gap-x-2 px-1">
			<Money />
			<h3 class="text-lg">Exports</h3>
		</a>
		<!-- Tourism -->
		<a href="/tourism" class="flex items-center gap-x-2 px-1">
			<Plane />
			<h3 class="text-lg">Tourism</h3>
		</a>
		<!-- Guides -->
		<a href="/guides" class="flex items-center gap-x-2 px-1">
			<QuestPin />
			<h3 class="text-lg">Guides</h3>
		</a>
	</div>
	<h1 class="absolute bottom-2 left-2">opencharter.</h1>
</div>

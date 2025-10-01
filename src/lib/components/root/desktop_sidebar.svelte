<script>
	import Globe from '../svgs/globe.svelte';
	import GlobeSelected from '../svgs/globe_selected.svelte';
	import House from '../svgs/house.svelte';
	import HouseSelected from '../svgs/house_selected.svelte';
	import LocationPin from '../svgs/location_pin.svelte';
	import Money from '../svgs/money.svelte';
	import MoneySelected from '../svgs/money_selected.svelte';
	import Newspaper from '../svgs/newspaper.svelte';
	import NewspaperSelected from '../svgs/newspaper_selected.svelte';
	import Plane from '../svgs/plane.svelte';
	import PlaneSelected from '../svgs/plane_selected.svelte';
	import QuestPin from '../svgs/quest_pin.svelte';
	import QuestPinSelected from '../svgs/quest_pin_selected.svelte';
	import Statistics from '../svgs/statistics.svelte';
	import StatisticsSelected from '../svgs/statistics_selected.svelte';
	import Trophy from '../svgs/trophy.svelte';
	import TrophySelected from '../svgs/trophy_selected.svelte';

	let { page } = $props();
</script>

<div class="relative flex h-full w-[15%] flex-col px-2">
	<!-- Location -->
	<div class="flex h-[6%] w-full items-center text-[#a8a8a8]">
		<div class="flex items-center gap-x-2 rounded-md border-[1px] border-[#222222] px-3">
			<LocationPin />
			Mongolia
		</div>
	</div>
	<!-- Menu -->
	<div class="flex flex-col gap-y-1">
		{#if page.url.pathname === '/'}
			<!-- Home -->
			<a href="/" class="flex items-center gap-x-2 rounded-md bg-[#1A1A1A] px-1">
				<HouseSelected />
				Home
			</a>
		{:else}
			<!-- Home -->
			<a href="/" class="flex items-center gap-x-2 px-1 text-[#A8A8A8]">
				<House />
				Home
			</a>
		{/if}

		<h2 class="font-rat-thin mt-4 w-[80%] border-b-[1px] border-[#222222]/50 text-[#A8A8A8]">
			open source data
		</h2>

		{#if page.url.pathname === '/statistics'}
			<!-- Statistics -->
			<a href="/statistics" class="flex items-center gap-x-2 rounded-md bg-[#1A1A1A] px-1">
				<StatisticsSelected />
				Statistics
			</a>
		{:else}
			<!-- Statistics -->
			<a href="/statistics" class="flex items-center gap-x-2 px-1 text-[#A8A8A8]">
				<Statistics />
				Statistics
			</a>
		{/if}

		{#if page.url.pathname === '/leaderboard'}
			<!-- Leaderboard -->
			<a href="/leaderboard" class="flex items-center gap-x-2 rounded-md bg-[#1A1A1A] px-1">
				<TrophySelected />
				Leaderboard
			</a>
		{:else}
			<!-- Leaderboard -->
			<a href="/leaderboard" class="flex items-center gap-x-2 px-1 text-[#A8A8A8]">
				<Trophy />
				Leaderboard
			</a>
		{/if}

		{#if page.url.pathname === '/exports'}
			<!-- Exports -->
			<a href="/exports" class="flex items-center gap-x-2 rounded-md bg-[#1A1A1A] px-1">
				<MoneySelected />
				Exports
			</a>
		{:else}
			<!-- Exports -->
			<a href="/exports" class="flex items-center gap-x-2 px-1 text-[#A8A8A8]">
				<Money />
				Exports
			</a>
		{/if}

		<h2 class="font-rat-thin mt-4 w-[80%] border-b-[1px] border-[#222222]/50 text-[#A8A8A8]">
			source of news
		</h2>

		{#if page.url.pathname === '/news-feed'}
			<!-- News Feed -->
			<a href="/news-feed" class="flex items-center gap-x-2 rounded-md bg-[#1A1A1A] px-1">
				<NewspaperSelected />
				News Feed
			</a>
		{:else}
			<!-- News Feed -->
			<a href="/news-feed" class="flex items-center gap-x-2 px-1 text-[#A8A8A8]">
				<Newspaper />
				News Feed
			</a>
		{/if}

		{#if page.url.pathname === '/global-feed'}
			<!-- Global Feed -->
			<a href="/global-feed" class="flex items-center gap-x-2 rounded-md bg-[#1A1A1A] px-1">
				<GlobeSelected />
				Global Feed
			</a>
		{:else}
			<!-- Global Feed -->
			<a href="/global-feed" class="flex items-center gap-x-2 px-1 text-[#A8A8A8]">
				<Globe />
				Global Feed
			</a>
		{/if}

		<h2 class="font-rat-thin mt-4 w-[80%] border-b-[1px] border-[#222222]/50 text-[#A8A8A8]">
			local tourism
		</h2>

		{#if page.url.pathname === '/tourism'}
			<!-- Tourism -->
			<a href="/tourism" class="flex items-center gap-x-2 rounded-md bg-[#1A1A1A] px-1">
				<PlaneSelected />
				Tourism
			</a>
		{:else}
			<!-- Tourism -->
			<a href="/tourism" class="flex items-center gap-x-2 px-1 text-[#A8A8A8]">
				<Plane />
				Tourism
			</a>
		{/if}

		{#if page.url.pathname === '/guides'}
			<!-- Guides -->
			<a href="/guides" class="flex items-center gap-x-2 rounded-md bg-[#1A1A1A] px-1">
				<QuestPinSelected />
				Guides
			</a>
		{:else}
			<!-- Guides -->
			<a href="/guides" class="flex items-center gap-x-2 px-1 text-[#A8A8A8]">
				<QuestPin />
				Guides
			</a>
		{/if}
	</div>

	<img src="./warning.png" class="mt-8" alt="warning" />
	<h1 class="absolute bottom-2 left-2">opencharter.</h1>
</div>

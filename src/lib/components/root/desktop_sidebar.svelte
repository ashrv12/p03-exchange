<script>
	import { onMount } from 'svelte';
	import Globe from '../svgs/globe.svelte';
	import House from '../svgs/house.svelte';
	import LocationPin from '../svgs/location_pin.svelte';
	import Money from '../svgs/money.svelte';
	import Newspaper from '../svgs/newspaper.svelte';
	import Plane from '../svgs/plane.svelte';
	import QuestPin from '../svgs/quest_pin.svelte';
	import Statistics from '../svgs/statistics.svelte';
	import Trophy from '../svgs/trophy.svelte';

	let { page } = $props();
</script>

<div class="relative flex h-full w-[15%] flex-col px-2 text-lg">
	<!-- Location -->
	<div class="flex h-[6%] w-full items-center gap-x-2">
		<LocationPin />
		Mongolia
	</div>
	<!-- Menu -->
	<div class="flex flex-col gap-y-1">
		{#if page.url.pathname === '/'}
			<!-- Home -->
			<a href="/" class="flex items-center gap-x-2 rounded-md bg-[#434343] px-1">
				<House />
				Home
			</a>
		{:else}
			<!-- Home -->
			<a href="/" class="flex items-center gap-x-2 px-1">
				<House />
				Home
			</a>
		{/if}
		{#if page.url.pathname === '/statistics'}
			<!-- Statistics -->
			<a href="/statistics" class="flex items-center gap-x-2 rounded-md bg-[#434343] px-1">
				<Statistics />
				Statistics
			</a>
		{:else}
			<!-- Statistics -->
			<a href="/statistics" class="flex items-center gap-x-2 px-1">
				<Statistics />
				Statistics
			</a>
		{/if}

		{#if page.url.pathname === '/news-feed'}
			<!-- News Feed -->
			<a href="/news-feed" class="flex items-center gap-x-2 rounded-md bg-[#434343] px-1">
				<Newspaper />
				News Feed
			</a>
		{:else}
			<!-- News Feed -->
			<a href="/news-feed" class="flex items-center gap-x-2 px-1">
				<Newspaper />
				News Feed
			</a>
		{/if}

		{#if page.url.pathname === '/leaderboard'}
			<!-- Leaderboard -->
			<a href="/leaderboard" class="flex items-center gap-x-2 rounded-md bg-[#434343] px-1">
				<Trophy />
				Leaderboard
			</a>
		{:else}
			<!-- Leaderboard -->
			<a href="/leaderboard" class="flex items-center gap-x-2 px-1">
				<Trophy />
				Leaderboard
			</a>
		{/if}

		{#if page.url.pathname === '/global-feed'}
			<!-- Global Feed -->
			<a href="/global-feed" class="flex items-center gap-x-2 rounded-md bg-[#434343] px-1">
				<Globe />
				Global Feed
			</a>
		{:else}
			<!-- Global Feed -->
			<a href="/global-feed" class="flex items-center gap-x-2 px-1">
				<Globe />
				Global Feed
			</a>
		{/if}

		{#if page.url.pathname === '/exports'}
			<!-- Exports -->
			<a href="/exports" class="flex items-center gap-x-2 rounded-md bg-[#434343] px-1">
				<Money />
				Exports
			</a>
		{:else}
			<!-- Exports -->
			<a href="/exports" class="flex items-center gap-x-2 px-1">
				<Money />
				Exports
			</a>
		{/if}

		{#if page.url.pathname === '/tourism'}
			<!-- Tourism -->
			<a href="/tourism" class="flex items-center gap-x-2 rounded-md bg-[#434343] px-1">
				<Plane />
				Tourism
			</a>
		{:else}
			<!-- Tourism -->
			<a href="/tourism" class="flex items-center gap-x-2 px-1">
				<Plane />
				Tourism
			</a>
		{/if}

		{#if page.url.pathname === '/guides'}
			<!-- Guides -->
			<a href="/guides" class="flex items-center gap-x-2 rounded-md bg-[#434343] px-1">
				<QuestPin />
				Guides
			</a>
		{:else}
			<!-- Guides -->
			<a href="/guides" class="flex items-center gap-x-2 px-1">
				<QuestPin />
				Guides
			</a>
		{/if}
	</div>

	<img src="./warning.png" class="mt-4" alt="warning" />
	<h1 class="absolute bottom-2 left-2">opencharter.</h1>
</div>

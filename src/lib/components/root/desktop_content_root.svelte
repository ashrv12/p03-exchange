<script>
	import House from '../svgs/house.svelte';
	import SearchIcon from '../svgs/search_icon.svelte';
	import TriangleRight from '../svgs/triangle_right.svelte';
	import DesktopChartsRoot from './desktop_charts_root.svelte';
	import DesktopListsRoot from './desktop_lists_root.svelte';
</script>

<div class="flex h-full w-[85%] flex-col text-[#B8B8B8]">
	<div class="z-0 flex h-[6%] w-full items-end pl-3">
		<!-- Mock Tab -->
		<div
			class="relative flex h-[70%] w-[220px] items-center justify-between rounded-t-md border-[1px] border-[#404040]/25 px-2"
		>
			<div class="flex items-center gap-x-2">
				<House />
				<h1>Home</h1>
			</div>
			<TriangleRight />
		</div>
	</div>
	<div class="z-1 flex w-full grow flex-col rounded-tl-md border-[1px] border-[#404040]/25">
		<div
			class="flex h-[10%] w-full items-center justify-between border-b-[1px] border-[#404040]/25 px-5"
		>
			<h1 class="font-rat-thin text-2xl">Dashboard</h1>
			<div
				class="flex items-center gap-x-2 rounded-lg border-[1px] border-[#404040]/25 px-2 py-1 focus-within:outline-1 focus-within:outline-[#a8a8a8]/50"
			>
				<SearchIcon />
				<input
					class="focus:outline-hidden"
					name="dash search"
					type="text"
					placeholder="search..."
				/>
			</div>
		</div>
		<div class="grid w-full grow grid-cols-3 grid-rows-2 justify-between gap-x-4 gap-y-8 p-5">
			<DesktopChartsRoot />
			<DesktopListsRoot />
		</div>
	</div>
</div>
<!-- Background color is 0a0a0a -->

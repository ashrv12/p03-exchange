<script>
	import House from '../svgs/house.svelte';
	import SearchIcon from '../svgs/search_icon.svelte';
	import TriangleRight from '../svgs/triangle_right.svelte';
</script>

<div class="flex h-full grow flex-col text-[#B8B8B8]">
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
		<div class="flex w-full grow justify-between gap-4 p-5">
			<div
				class="h-[250px] w-[400px] rounded-lg border-[1px] border-[#404040]/25 bg-[#0D0D0D] p-2 hover:outline hover:outline-[#1A1A1A]"
			>
				<h1>Coal <span class="opacity-75">/ USD</span></h1>
			</div>

			<div
				class="h-[250px] w-[400px] rounded-lg border-[1px] border-[#404040]/25 bg-[#0D0D0D] p-2 hover:outline hover:outline-[#1A1A1A]"
			>
				<h1>USD <span class="opacity-75">/ MNT</span></h1>
			</div>

			<div
				class="h-[250px] w-[400px] rounded-lg border-[1px] border-[#404040]/25 bg-[#0D0D0D] p-2 hover:outline hover:outline-[#1A1A1A]"
			>
				<h1>Net inflation</h1>
			</div>
		</div>
	</div>
</div>
<!-- Background color is 0a0a0a -->

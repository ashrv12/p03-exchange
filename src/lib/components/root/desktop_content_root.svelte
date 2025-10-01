<script>
	import House from '../svgs/house.svelte';
	import TriangleRight from '../svgs/triangle_right.svelte';
</script>

<div class="flex h-full grow flex-col text-[#a8a8a8]">
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
		<div class="flex h-[10%] w-full items-center border-b-[1px] border-[#404040]/25 px-1">
			<h1 class="font-rat-thin px-5 text-2xl">Dashboard</h1>
		</div>
		<div class="w-full grow p-5">
			<div
				class="h-[250px] w-[400px] rounded-lg border-[1px] border-[#404040]/25 bg-[#0D0D0D]"
			></div>
		</div>
	</div>
</div>
<!-- Background color is 0a0a0a -->

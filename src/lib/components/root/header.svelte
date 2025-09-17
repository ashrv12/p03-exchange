<script lang="ts">
	let openMenu = $state(false);
</script>

<div class="glass absolute top-0 flex w-dvw items-center py-1 text-[#edededff]">
	<button onclick={() => (openMenu = !openMenu)}>
		<img class="w-[2rem]" src="./burger.svg" alt="menu" />
	</button>
</div>

{#if openMenu}
	<div class="glass absolute top-0 left-0 h-full w-[75dvw] rounded-r-lg">
		<div class="relative h-full w-full">
			<button class="absolute top-1 left-0" onclick={() => (openMenu = !openMenu)}>
				<img class="w-[2rem]" src="./close.svg" alt="menu" />
			</button>
		</div>
	</div>
{/if}

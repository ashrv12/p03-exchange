<script lang="ts">
	let openMenu = $state(false);
	let selectedPage = $state('home');
</script>

<div class="glass absolute top-0 flex w-dvw items-center py-1 text-[#edededff]">
	<button onclick={() => (openMenu = !openMenu)}>
		<img class="w-[2rem]" src="./burger.svg" alt="menu" />
	</button>
</div>

{#if openMenu}
	<div class="glass absolute top-0 left-0 h-full w-[75dvw] rounded-r-lg text-[#edededff]">
		<div class="flex h-full w-full flex-col gap-y-3 pt-1">
			<button class="" onclick={() => (openMenu = !openMenu)}>
				<img class="w-[2rem]" src="./close.svg" alt="close" />
			</button>
			{#if selectedPage === 'home'}
				<a class="px-2 text-3xl opacity-50" href="/">home</a>
				<a
					onclick={() => {
						openMenu = !openMenu;
						selectedPage = 'statistics';
					}}
					class="px-2 text-3xl"
					href="/statistics">statistics</a
				>
				<a
					onclick={() => {
						openMenu = !openMenu;
						selectedPage = 'about';
					}}
					class="px-2 text-3xl"
					href="/about">about us</a
				>
			{:else if selectedPage === 'statistics'}
				<a
					onclick={() => {
						openMenu = !openMenu;
						selectedPage = 'home';
					}}
					class="px-2 text-3xl"
					href="/">home</a
				>
				<a class="px-2 text-3xl opacity-50" href="/statistics">statistics</a>
				<a
					onclick={() => {
						openMenu = !openMenu;
						selectedPage = 'about';
					}}
					class="px-2 text-3xl"
					href="/about">about us</a
				>
			{:else}
				<a
					onclick={() => {
						openMenu = !openMenu;
						selectedPage = 'home';
					}}
					class="px-2 text-3xl"
					href="/">home</a
				>
				<a
					onclick={() => {
						openMenu = !openMenu;
						selectedPage = 'statistics';
					}}
					class="px-2 text-3xl"
					href="/statistics">statistics</a
				>
				<a class="px-2 text-3xl opacity-50" href="/about">about us</a>
			{/if}
		</div>
	</div>
{/if}

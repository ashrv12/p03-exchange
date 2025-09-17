<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/root/header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="relative flex h-full w-full flex-col items-center gap-y-3 py-12">
	{@render children?.()}
	<Header />
</main>

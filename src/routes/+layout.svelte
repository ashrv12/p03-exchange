<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import Header from '$lib/components/root/header.svelte';
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import posthog from 'posthog-js';

	let { children } = $props();

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="relative flex h-full w-full flex-col items-center gap-y-3 py-12">
	{@render children?.()}
	<Header />
</main>

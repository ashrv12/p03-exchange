<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import posthog from 'posthog-js';
	import DesktopSidebar from '$lib/components/root/desktop_sidebar.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="font-rat flex h-full w-full">
	<DesktopSidebar {page} />
	{@render children?.()}
</main>

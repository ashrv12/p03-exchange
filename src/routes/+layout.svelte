<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import posthog from 'posthog-js';
	import DesktopSidebar from '$lib/components/root/desktop_sidebar.svelte';
	import { page } from '$app/state';

	// setup convex
	import { setupConvex } from 'convex-svelte';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';

	const { children } = $props();
	setupConvex(PUBLIC_CONVEX_URL);

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

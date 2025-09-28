<script>
	import DesktopContent from '$lib/components/root/desktop_content.svelte';
	import DesktopSidebar from '$lib/components/root/desktop_sidebar.svelte';

	// mongolbank data
	let { data } = $props();
</script>

<main class="saans flex h-full w-full">
	<DesktopSidebar />
	<DesktopContent />
</main>

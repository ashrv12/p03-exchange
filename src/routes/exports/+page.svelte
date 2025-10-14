<script lang="ts">
	import MonthlyExportsPiechart from './monthly_exports_piechart.svelte';
	import { useQuery } from 'convex-svelte';
	import { api } from '../../convex/_generated/api';

	const query = useQuery(api.exportsQueries.getLatestExport, {});
</script>

<div class="grid h-full w-[85%] grid-cols-3 grid-rows-3 gap-3 p-3 text-[#B8B8B8]">
	<MonthlyExportsPiechart />
	<div class="h-full w-full border">
		{#if query.isLoading}
			Loading...
		{:else if query.error}
			failed to load: {query.error.toString()}
		{:else}
			<ul>
				<li>
					{query.data?._creationTime}
					<span>{query.data?.reportDate}</span>
					<span>assigned by {query.data?.total}</span>
				</li>
			</ul>
		{/if}
	</div>
</div>

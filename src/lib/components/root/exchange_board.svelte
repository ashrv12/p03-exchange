<script lang="ts">
	let banks = $state(['MongolBank', 'KhanBank', 'TDB', 'GolomtBank', 'XacBank']);
	let currentSelectedBank = $state(banks[0]);
	let showBankOptions = $state(false);
</script>

<div class="grid w-full grid-cols-2 gap-x-1 gap-y-3 px-1">
	<div class="no-scrollbar font-plex-400 col-span-full flex h-[3rem] overflow-x-scroll text-2xl">
		<ul class="flex items-center gap-x-3 whitespace-nowrap">
			<li>
				<button
					onclick={() => {
						showBankOptions = !showBankOptions;
					}}
					class="w-fit">{currentSelectedBank}</button
				>
			</li>
			{#if showBankOptions}
				{#each banks.filter((bank) => bank !== currentSelectedBank) as bank}
					<li>
						<button
							class=""
							onclick={() => {
								currentSelectedBank = bank;
								showBankOptions = !showBankOptions;
							}}>{bank}</button
						>
					</li>
				{/each}
			{/if}
		</ul>
	</div>

	<div class="glass col-span-full grid grid-cols-2 rounded-md">
		<div class="flex justify-center gap-x-2 text-lg text-[#edededff]">
			<h3 class="">🇨🇭 4500</h3>
			<h3>chf</h3>
		</div>
		<div class="flex justify-center gap-x-2 text-lg text-[#edededff]">
			<h3 class="">🇩🇪 3600</h3>
			<h3>eur</h3>
		</div>
	</div>
</div>

<script lang="ts">
	import { emojisToCurrency } from '$lib/emojis_to_currency';
	import { preferences } from '../../../stores/preferences';

	let banks = $state(['MongolBank', 'KhanBank', 'TDB', 'GolomtBank', 'XacBank']);
	let currentSelectedBank = $state(banks[0]);
	let showBankOptions = $state(false);

	let { data } = $props();

	const emojiMap = Object.fromEntries(
		emojisToCurrency.map((item) => [item.currency, item.currencyEmoji])
	);

	function getEmoji(currencyCode: string) {
		return emojiMap[currencyCode.toLowerCase()] ?? '🏳️'; // fallback flag
	}
</script>

<div class="grid h-[65%] w-full grid-cols-2 gap-x-1 gap-y-3 px-1">
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

	<div
		class="glass col-span-full grid grid-cols-2 overflow-y-scroll rounded-md px-2 text-sm font-thin"
	>
		{#each Object.entries(data.rates) as currencyRate}
			{#if currencyRate[0] != 'RATE_DATE'}
				<div class="flex gap-x-2 py-1 text-[#edededff]">
					<h3 class="">{getEmoji(currencyRate[0].toLowerCase())} {currencyRate[1]}</h3>
					<h3>{$preferences.currency}</h3>
				</div>
			{/if}
		{/each}
	</div>
</div>

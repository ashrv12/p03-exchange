<script lang="ts">
	import { emojisToCurrency } from '$lib/emojis_to_currency';
	import { onMount } from 'svelte';
	import { preferences } from '../../../stores/preferences';

	// date for today
	const formatted = new Date().toLocaleDateString('en-CA', {
		timeZone: 'Asia/Ulaanbaatar'
	});

	// api for banks
	const khanbank = `https://www.khanbank.com/api/back/rates?date=${formatted}`;

	// list of banks
	let banks = $state(['MongolBank', 'KhanBank', 'TDB', 'GolomtBank']);
	// current selected bank
	let currentSelectedBank = $state(banks[0]);
	// selected json data of selected banks
	let khanRates = $state();
	let golomtData = $state();

	let { data } = $props();

	const emojiMap = Object.fromEntries(
		emojisToCurrency.map((item) => [item.currency, item.currencyEmoji])
	);

	function getEmoji(currencyCode: string) {
		return emojiMap[currencyCode.toLowerCase()] ?? '🏳️'; // fallback flag
	}

	onMount(async () => {
		const res = await fetch(khanbank);
		if (res.ok) {
			khanRates = await res.json();
		} else {
			console.log(res.status);
		}

		const golomtResponse = await fetch('/api/currency');
		if (res.ok) {
			golomtData = await golomtResponse.json();
		} else {
			console.log(golomtResponse.status);
		}
	});
</script>

<div class="flex h-[76%] w-full flex-col gap-x-1 gap-y-2 px-2 text-[#edededff]">
	<div
		class="glass relative flex h-full w-full flex-col overflow-y-scroll rounded-md text-sm font-thin"
	>
		<select
			class="glass sticky top-0 right-0 left-0 w-full border-b-[1px] p-1 text-xl font-semibold"
			bind:value={currentSelectedBank}
		>
			{#each banks as bank}
				<option value={bank}>{bank}</option>
			{/each}
		</select>
		{#if currentSelectedBank === banks[0]}
			{#each Object.entries(data.rates) as currencyRate}
				{#if currencyRate[0] != 'RATE_DATE'}
					<div class="flex gap-x-2 px-2">
						<h3 class="">
							{getEmoji(currencyRate[0].toLowerCase())}
							<span class="font-semibold">{currencyRate[1]}</span>
						</h3>
						<h3>{$preferences.currency}</h3>
					</div>
				{/if}
			{/each}
		{:else if currentSelectedBank === banks[1]}
			{#each khanRates as rate}
				<div class="flex gap-x-2 px-2">
					<h3 class="">
						{getEmoji(rate.currency.toLowerCase())}
						<span class="font-semibold">{rate.sellRate}</span>
					</h3>
					<h3>{$preferences.currency}</h3>
				</div>
			{/each}
		{:else if currentSelectedBank === banks[3]}
			{#each Object.entries(golomtData.golomtRates.result) as [code, data]}
				<div class="flex gap-x-2 px-2">
					<h3 class="">
						{getEmoji(code.toLowerCase())}
						<span class="font-semibold">{data.non_cash_sell.cvalue}</span>
					</h3>
					<h3>{$preferences.currency}</h3>
				</div>
			{/each}
		{/if}
	</div>
</div>

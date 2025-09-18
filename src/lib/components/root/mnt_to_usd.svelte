<script lang="ts">
	import { emojisToCurrency } from '$lib/emojis_to_currency';
	import { preferences } from '../../../stores/preferences';

	let { data } = $props();
	let rates: [string, string][] = Object.entries(data.rates);

	let defaultCurrency = rates.find(([code]) => code === 'USD');

	// first block for selecting your currency
	let first = $state({
		currency: (rates[0][0] === 'RATE_DATE' ? rates[1][0] : rates[0][0]).toLowerCase(),
		amount: 1
	});

	// second block for after selecting you show the conversion
	let second = $state({
		...$preferences,
		amount: defaultCurrency ? parseFloat(defaultCurrency[1].replace(',', '') as string) : 696969
	});

	// third block for deriving the converted amount
	let conversion = $derived(first.amount * second.amount);

	// just creating an emoji hash map
	const emojiMap = Object.fromEntries(
		emojisToCurrency.map((item) => [item.currency, item.currencyEmoji])
	);

	// using thus hashmap to find the correct emoji using the currency code
	function getEmoji(currencyCode: string) {
		return emojiMap[currencyCode.toLowerCase()] ?? '🏳️'; // fallback flag
	}
</script>

<div class="flex w-full flex-col items-center justify-center gap-y-1 px-2 text-[#edededff]">
	<div class="glass flex w-full items-center justify-center rounded-md border-b-[3px] px-3">
		<input
			class="h-[3rem] w-[80%] appearance-none overflow-hidden border-none bg-transparent text-center text-2xl outline-none focus:outline-none"
			type="number"
			bind:value={first.amount}
		/>
		<div class="flex gap-x-1 text-2xl">
			<h3>{getEmoji(first.currency.toLowerCase())}</h3>
			<h3>{first.currency}</h3>
		</div>
	</div>
	<button class="">
		<img class="w-[1.5rem]" src="./swap.svg" alt="swap" />
	</button>
	<div class="glass flex w-full items-center justify-center rounded-md border-b-[3px] px-3">
		{#if second.amount === 696969}
			<input
				class="h-[3rem] w-[80%] appearance-none overflow-hidden border-none bg-transparent text-center text-2xl outline-none focus:outline-none"
				type="text"
				value="696969"
				disabled
			/>
		{:else}
			<input
				class="h-[3rem] w-[80%] appearance-none overflow-hidden border-none bg-transparent text-center text-2xl outline-none focus:outline-none"
				type="number"
				bind:value={conversion}
				disabled
			/>
		{/if}
		<div class="flex gap-x-1 text-2xl">
			<h3>{getEmoji(second.currency.toLowerCase())}</h3>
			<h3>{second.currency}</h3>
		</div>
	</div>
</div>

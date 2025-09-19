<script lang="ts">
	import { emojisToCurrency } from '$lib/emojis_to_currency';

	let { data } = $props();
	let rates: [string, string][] = Object.entries(data.rates);

	// the amount they wish to conver to their selected currency
	let userAmountInput = $state(1.0);
	let userConvertedToCurrency = $state('mnt');

	// usd eur cny type string
	let selectedTargetCurrency = $state('usd');
	let selectedTargetCurrencyPrice = $derived(findCurrencyPrice(selectedTargetCurrency));

	// function that takes a three letter currency input and returns the price in float
	function findCurrencyPrice(selectedCurrency: string) {
		const defaultCurrency = rates.find(
			([currencyCode]) => currencyCode === selectedCurrency.toUpperCase()
		);
		if (!defaultCurrency) return null;

		return parseFloat(defaultCurrency[1].replace(',', ''));
	}

	// third block for deriving the converted amount
	let conversion = $derived(
		selectedTargetCurrencyPrice
			? roundDownTo2Fixed(userAmountInput * selectedTargetCurrencyPrice)
			: 6969.69
	);

	// just creating an emoji hash map
	const emojiMap = Object.fromEntries(
		emojisToCurrency.map((item) => [item.currency, item.currencyEmoji])
	);

	// using thus hashmap to find the correct emoji using the currency code
	function getEmoji(currencyCode: string) {
		return emojiMap[currencyCode.toLowerCase()] ?? '🏳️'; // fallback flag
	}

	function roundDownTo2Fixed(num: number) {
		return (Math.floor(num * 100) / 100).toFixed(2);
	}
</script>

<div class="flex w-full flex-col items-center justify-center gap-y-1 px-2 text-[#edededff]">
	<div class="glass flex w-full items-center justify-center rounded-md border-b-[3px] px-3">
		<input
			class="h-[3rem] w-[80%] appearance-none overflow-hidden border-none bg-transparent text-center text-2xl outline-none focus:outline-none"
			type="number"
			bind:value={userAmountInput}
		/>
		<!-- <div class="flex gap-x-1 text-2xl">
			<h3>{getEmoji(first.currency.toLowerCase())}</h3>
			<h3>{first.currency}</h3>
		</div> -->
		<select bind:value={selectedTargetCurrency}>
			{#each emojisToCurrency as country}
				{#if country.currency === 'mnt'}
					<option value={country.currency} disabled
						>{country.countryEmoji} {country.currency}</option
					>
				{:else}
					<option value={country.currency}>{country.countryEmoji} {country.currency}</option>
				{/if}
			{/each}
		</select>
	</div>
	<button class="">
		<img class="w-[1.5rem]" src="./swap.svg" alt="swap" />
	</button>
	<div class="glass flex w-full items-center justify-center rounded-md border-b-[3px] px-3">
		{#if conversion === 6969.69}
			<input
				class="h-[3rem] w-[80%] appearance-none overflow-hidden border-none bg-transparent text-center text-2xl outline-none focus:outline-none"
				type="text"
				value="6969.69"
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
		<div class="flex gap-x-1 text-lg">
			<h3>{getEmoji(userConvertedToCurrency)}</h3>
			<h3>{userConvertedToCurrency}</h3>
		</div>
	</div>
</div>

<script lang="ts">
	import { emojisToCurrency } from '$lib/emojis_to_currency';

	let first = $state({
		currency: 'usd',
		amount: 1
	});

	let second = $state({
		currency: 'mnt',
		amount: 3664
	});

	let { data } = $props();

	const emojiMap = Object.fromEntries(
		emojisToCurrency.map((item) => [item.currency, item.currencyEmoji])
	);

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
		<input
			class="h-[3rem] w-[80%] appearance-none overflow-hidden border-none bg-transparent text-center text-2xl outline-none focus:outline-none"
			type="number"
			bind:value={second.amount}
			disabled
		/>
		<div class="flex gap-x-1 text-2xl">
			<h3>{getEmoji(second.currency.toLowerCase())}</h3>
			<h3>{second.currency}</h3>
		</div>
	</div>
</div>

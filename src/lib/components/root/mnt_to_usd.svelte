<script lang="ts">
	let first = $state({
		currency: 'usd',
		amount: 1
	});

	let second = $state({
		currency: 'mnt',
		amount: 3664
	});
</script>

<div class="flex w-full items-center justify-center gap-x-2">
	<div class="flex items-center border-b-[1px]">
		<input
			class="h-[3rem] w-[6rem] appearance-none overflow-hidden border-none bg-transparent text-2xl outline-none focus:outline-none"
			type="number"
			bind:value={first.amount}
		/>
		<h2 class="text-2xl">{first.currency}</h2>
	</div>
	<h2 class="text-2xl">=</h2>
	<div class="flex items-center border-b-[1px]">
		<input
			class="h-[3rem] w-[6rem] appearance-none overflow-hidden border-none bg-transparent text-2xl outline-none focus:outline-none"
			type="number"
			bind:value={second.amount}
		/>
		<h2 class="text-2xl">{second.currency}</h2>
	</div>
</div>

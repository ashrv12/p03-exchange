<script>
	import ExchangeBoard from '$lib/components/root/exchange_board.svelte';
	import MntToUsd from '$lib/components/root/mnt_to_usd.svelte';
</script>

<main class="relative flex h-full w-full flex-col gap-y-3">
	<MntToUsd />
	<ExchangeBoard />
	<div class="absolute bottom-0 left-0 flex w-full items-end justify-between p-2">
		<h1 class="text-lg text-[#edededff]/25">Open Charter.</h1>
		<a href="https://github.com/ashrv12/p03-exchange" target="_blank">
			<img class="w-[30px]" src="./github.svg" alt="github-logo" />
		</a>
	</div>
</main>

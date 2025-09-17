<script lang="ts">
	import { preferences } from '../../../stores/preferences';
	import { emojisToCurrency } from '$lib/emojis_to_currency';

	let selectedCountry = $state(
		emojisToCurrency.find(
			(country) =>
				country.country === $preferences.country && country.currency === $preferences.currency
		) || emojisToCurrency[0]
	);
	let selectedCurrency = $state($preferences.currency);

	$effect(() => {
		if (selectedCountry) {
			preferences.update((prefs) => ({
				...prefs,
				emoji: selectedCountry.emoji,
				country: selectedCountry.country,
				currency: selectedCountry.currency
			}));
		}
	});
</script>

<div class="flex w-full justify-around text-[#edededff]">
	<!-- dropdown for choosing your country -->
	<div
		class="glass relative flex aspect-video w-[45%] flex-col items-center justify-center rounded-xl border border-[#0d0d0d4d] hover:border-[#c2c2c2]"
	>
		<h3 class="font-thin">Country</h3>
		<select
			class="w-[80%] text-center"
			bind:value={selectedCountry}
			name="countries"
			id="countrySelect"
		>
			{#each emojisToCurrency as country}
				<option value={country}>{country.emoji} {country.country}</option>
			{/each}
		</select>
	</div>
	<!-- dropdown for choosing your preferred currency -->
	<div
		class="glass flex aspect-video w-[45%] flex-col items-center justify-center rounded-xl border border-[#0d0d0d4d] hover:border-[#c2c2c2]"
	>
		<h3 class="font-thin">Currency</h3>
		<select
			class="w-[80%] text-center"
			bind:value={selectedCurrency}
			name="countries"
			id="countrySelect"
		>
			{#each emojisToCurrency as country}
				<option value={country.currency}>{country.emoji} {country.currency}</option>
			{/each}
		</select>
	</div>
</div>

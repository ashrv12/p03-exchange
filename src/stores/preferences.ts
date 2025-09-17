import { writable } from 'svelte/store';
import { browser } from '$app/environment';

interface Preferences {
	countryEmoji: string;
	currencyEmoji: string;
	currency: string;
	country: string;
}

const defaultPreferences: Preferences = {
	countryEmoji: '🇲🇳',
	currencyEmoji: '🇲🇳',
	currency: 'mnt',
	country: 'Mongolia'
};

let initial: Preferences = defaultPreferences;

if (browser) {
	const stored = localStorage.getItem('preferences');
	initial = stored ? JSON.parse(stored) : defaultPreferences;
}

export const preferences = writable<Preferences>(initial);

if (browser) {
	preferences.subscribe((value) => localStorage.setItem('preferences', JSON.stringify(value)));
}

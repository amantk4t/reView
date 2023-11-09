<script lang="ts">
	import './styles.css';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import type { LayoutData } from './$types';

	export let data: LayoutData;

	// Create a store and update it when necessary...
	const query = writable();
	$: query.set('something');
	console.log('Query data', query);

	// ...and add it to the context for child components to access
	setContext('query', query);
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
</style>

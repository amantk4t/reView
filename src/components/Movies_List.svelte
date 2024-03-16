<script>
	import Movie from './Movie.svelte';
	import DotLoader from './DotLoader.svelte';
	export let selectedOption = [{}];
	export let loading = false;
</script>

<div>
	{#if loading}
		<DotLoader />
	{:else}
		<section id="carousel-item" class="flex flex-wrap gap-4 items-center">
			{#each selectedOption as movie}
				<Movie {movie} />
			{/each}
		</section>
	{/if}
</div>


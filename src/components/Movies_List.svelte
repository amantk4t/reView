<script>
	import Movie from './Movie.svelte';
	export let similar = [{}];
</script>

<section id="carousel-item" class="flex flex-wrap gap-4 items-center">
	{#each similar as movie}
		<Movie {movie} />
	{/each}
</section>

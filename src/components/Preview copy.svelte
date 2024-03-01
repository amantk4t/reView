<script lang="ts">
	export let movie: any = {};
	export let carousel: any = false;
	console.log(movie);
</script>

<a
	href="/detail/{movie.title ? 'movie' : 'tv'}/{movie.id}"
	class:carousel
	class="relative block overflow-hidden group w-full h-[25rem]"
	on:click
>
	<img
		alt={movie.title || movie.original_name}
		src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
		class="object-cover object-left-top w-full h-full transition duration-500 group-hover:scale-105"
	/>

	<div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-4 mt-2 h-20">
		<h3 class="text-6xl font-bold text-gray-200 text-shadow text-center">
			{movie.title || movie.original_name}
		</h3>
	</div>
	<section class="flex items-center gap-2">
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5">
			<path
				d="m12 17.328-5.403 3.286a.75.75 0 0 1-1.12-.813l1.456-6.155-4.796-4.123a.75.75 0 0 1 .428-1.316l6.303-.517 2.44-5.835a.75.75 0 0 1 1.384 0l2.44 5.835 6.303.517a.75.75 0 0 1 .427 1.316l-4.795 4.123 1.456 6.155a.75.75 0 0 1-1.12.813L12 17.328z"
				fill="#fff700"
			/>
		</svg>
		{#if movie.vote_average}
			<p class="mt-1.5 text-sm text-gray-200 dark:text-white">
				{movie.vote_average?.toFixed(1)} / 10
			</p>
		{:else}
			<p class="mt-1.5 text-sm text-gray-700 dark:text-gray-400">No rating</p>
		{/if}
	</section>
	<p
		class="text-sm text-gray-200 font-bold px-2 absolute bottom-0 right-0 py-2 w-14 rounded-tl-full bg-gray-700/50 flex items-start justify-end"
	>
		{movie.release_date?.slice(0, 4) || movie.first_air_date?.slice(0, 4)}
	</p>
</a>

<style>
	.text-shadow {
		text-shadow: 2px 2px 0 rgba(0, 0, 0, 1);
	}
	.text-shadow-light {
		text-shadow: 2px 2px 0 rgba(255, 255, 255, 1);
	}
</style>

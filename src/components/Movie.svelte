<script lang="ts">
	export let movie: any = {};
	export let carousel = false;
	// console.log(movie);
</script>

<a
	href="/detail/{movie.title ? 'movie' : 'tv'}/{movie.id}"
	class:carousel
	class="relative block overflow-hidden group w-60"
	on:click
>
	<img
		alt={movie.title || movie.original_name}
		src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
		class="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
	/>

	<div class="relative mt-2">
		<h3 class="text-sm font-bold text-gray-900 dark:text-white">
			{movie.title || movie.original_name}
		</h3>
	</div>
	<section class="flex items-end justify-between">
		<!-- <p class="mt-1.5 text-sm text-gray-700 dark:text-gray-400">
			{movie.vote_average?.toFixed(1)} / 10
		</p> -->
		{#if movie.vote_average}
			<section class="flex items-center gap-2">
				<p class="mt-1.5 text-sm text-gray-700 dark:text-white">
					{movie.vote_average?.toFixed(1)}
				</p>
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5">
					<path
						d="m12 17.328-5.403 3.286a.75.75 0 0 1-1.12-.813l1.456-6.155-4.796-4.123a.75.75 0 0 1 .428-1.316l6.303-.517 2.44-5.835a.75.75 0 0 1 1.384 0l2.44 5.835 6.303.517a.75.75 0 0 1 .427 1.316l-4.795 4.123 1.456 6.155a.75.75 0 0 1-1.12.813L12 17.328z"
						fill="#fff700"
					/>
				</svg>
			</section>
		{:else}
			<p class="mt-1.5 text-sm text-gray-700 dark:text-gray-400">No rating</p>
		{/if}
		<p class="text-sm text-gray-700 dark:text-gray-200 font-bold px-2 rounded-full">
			{movie.release_date?.slice(0, 4) || movie.first_air_date?.slice(0, 4)}
		</p>
	</section>
</a>

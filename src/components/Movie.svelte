<script lang="ts">
	export let movie: any = {};
	export let carousel = false;
	// console.log(movie);
</script>

<a
	href="/detail/{movie.title ? 'movie' : 'tv'}/{movie.id}"
	class:carousel
	class="relative block group w-11/12 sm:w-60 group"
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
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5">
					<path
						d="m12 17.328-5.403 3.286a.75.75 0 0 1-1.12-.813l1.456-6.155-4.796-4.123a.75.75 0 0 1 .428-1.316l6.303-.517 2.44-5.835a.75.75 0 0 1 1.384 0l2.44 5.835 6.303.517a.75.75 0 0 1 .427 1.316l-4.795 4.123 1.456 6.155a.75.75 0 0 1-1.12.813L12 17.328z"
						fill="#fff700"
					/>
				</svg>
				<p class="mt-1.5 text-sm text-gray-700 dark:text-white">
					{movie.vote_average?.toFixed(1)}
				</p>
			</section>
		{:else}
			<p class="mt-1.5 text-sm text-gray-700 dark:text-gray-400">No rating</p>
		{/if}
		<p class="text-sm text-gray-700 dark:text-gray-200 font-bold px-2 rounded-full">
			{movie.release_date?.slice(0, 4) || movie.first_air_date?.slice(0, 4)}
		</p>
	</section>
	<div
		class="absolute top-1/2 -translate-y-1/2 left-1/2 rounded-md w-60 bg-white dark:bg-gray-800 z-10 h-72 px-6 py-4 opacity-0 hidden group-hover:grid group-hover:opacity-100 gap-2 transition-all duration-300"
	>
		<h3 class="font-bold text-gray-900 dark:text-white text-lg">
			{movie.title || movie.original_name}
		</h3>
		{#if movie.vote_average}
			<section class="flex items-center gap-2 p-1 w-full rounded-full bg-gray-100 dark:bg-gray-700">
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5">
					<path
						d="m12 17.328-5.403 3.286a.75.75 0 0 1-1.12-.813l1.456-6.155-4.796-4.123a.75.75 0 0 1 .428-1.316l6.303-.517 2.44-5.835a.75.75 0 0 1 1.384 0l2.44 5.835 6.303.517a.75.75 0 0 1 .427 1.316l-4.795 4.123 1.456 6.155a.75.75 0 0 1-1.12.813L12 17.328z"
						fill="#fff700"
					/>
				</svg>
				<p class="text-sm text-gray-600 dark:text-white font-semibold">
					{movie.vote_average?.toFixed(1)} / 10 ({movie.vote_count} reviews)
				</p>
			</section>
		{:else}
			<p class="mt-1.5 text-sm text-gray-700 dark:text-gray-400">No rating</p>
		{/if}
		<p class="text-gray-600 dark:text-gray-300 max-h-44 overflow-y-hidden text-ellipsis text-sm">
			{movie.overview}
		</p>
		<div class="flex items-center md:justify-center mt-4">
			<a
				href="/detail/{movie.title ? 'movie' : 'tv'}/{movie.id}"
				class="inline-flex items-center justify-center h-8 px-6 mr-6 font-medium text-sm tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-400 hover:bg-orange-500 focus:shadow-outline focus:outline-none"
			>
				<svg class="w-8 text-gray-100" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"
					/>
				</svg>
				Watch now
			</a>
		</div>
	</div>
</a>

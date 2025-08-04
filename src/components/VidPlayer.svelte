<script lang="ts">
	import SpinLoader from './SpinLoader.svelte';

	export let movie = null as any;
	export let isMovie = false;

	$: title = movie?.title || '';
	$: opened = false;
	$: loading = false;
	$: tmdb_id = movie.id;

	//$: src = isMovie
	//	? `https://vidsrc.to/embed/movie/${tmdb_id}`
	//	: `https://vidsrc.to/embed/tv/${tmdb_id}`;

	$: src = `https://multiembed.mov/?video_id=${tmdb_id}&tmdb=1`;
	const loadVideo = async () => {
		try {
			loading = true;
			// const resMovie = await fetch(src);
			fetch(`/api/multiembed?id=522931`)
				.then((r) => r.text())
				.then((html) => {
					console.log(html);
				});

			opened = true;
			const playBtn = document.getElementById('btn-play');
			playBtn?.click();
		} catch (error) {
			console.error(error);
		} finally {
			loading = false;
		}
	};
</script>

<div class="relative w-screen sm:h-[80vh] min-h-[500px] max-w-full grid items-center">
	<img
		alt={title}
		src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
		class="absolute blur-md object-cover w-full h-full overflow-hidden shadow-lg rounded-lg"
	/>
	<div
		class="relative mt-5 md:mb-0 w-[95vw] sm:w-[91vw] mx-auto sm:h-[70vh] min-h-[400px] max-w-full z-10"
	>
		{#if opened}
			<div class="absolute w-full h-full top-0 left-0 z-30 rounded-lg bg-gray-400/50">
				<div class="relative w-full h-full">
					<iframe
						{title}
						{src}
						frameborder="0"
						allowfullscreen
						allow="autoplay; fullscreen"
						class="absolute top-0 left-0 w-full h-full rounded-lg"
					/>
				</div>
			</div>
		{:else}
			<img
				alt={title}
				src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
				class="absolute z-40 object-cover w-full h-full overflow-hidden shadow-lg rounded-lg"
			/>
			<button
				on:click={loadVideo}
				aria-label="Play Video"
				class:loading
				class="absolute inset-0 top-0 flex items-center justify-center w-full max-w-full h-full transition-colors duration-300 bg-gray-800 bg-opacity-50 group hover:bg-opacity-25 rounded-lg z-40"
			>
				<div
					class="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110"
				>
					{#if loading}
						<SpinLoader />
					{:else}
						<svg class="w-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"
							/>
						</svg>
					{/if}
				</div>
			</button>
		{/if}
	</div>
</div>

<style>
</style>

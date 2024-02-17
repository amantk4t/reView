<script lang="ts">
	import type { PageData } from './$types';
	import MoviesList from '../../../../components/Movies_List.svelte';
	import DetailShimmer from '../../../../components/DetailShimmer.svelte';
	import VidPlayer from '../../../../components/VidPlayer.svelte';
	import Header from '../../../../components/Header.svelte';
	import { onMount } from 'svelte';
	import { goto, afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';

	export let data: PageData;

	let previousPage: string = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
	});

	$: movie = data.movie;
	$: similar = data.similar;
	$: videos = data.videos;
	$: id = data.id;
	$: loading = false;
	$: loadingMovie = data.loading;
	onMount(() => {
		console.log('loading', loadingMovie);
		console.log('movie', movie);
	});
</script>

<svelte:head>
	<title>Re-view - {movie.original_name || movie.title}</title>
	<meta name="description" content={movie.overview} />
</svelte:head>

<section class="dark:bg-gray-900">
	<Header showList={false} />
	<div class="flex justify-center">
		<button
			on:click={() => history.back()}
			class="flex items-center justify-center w-10 h-10 transition duration-300 transform dark:text-gray-200 rounded-full shadow-2xl absolute top-5 left-5 z-50 hover:text-gray-100"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-5 h-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="4"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg>
		</button>
	</div>
	<div class="max-w-full">
		<div class="mb-4">
			<VidPlayer title={movie.title} {movie} isMovie={true} />
		</div>
		<div
			class="relative md:mb-0 w-[95vw] sm:w-[75vw] mx-auto max-w-full flex flex-col mt-20 bg-gray-50 dark:bg-gray-800 p-2 rounded-md"
		>
			{#if movie.title !== undefined && !loading}
				<section class="flex flex-col sm:flex-row items-start gap-4">
					<img
						class="w-full sm:w-60 h-60 lg:h-full object-cover rounded-md"
						src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
						alt=""
					/>
					<div class="grid gap-2 w-full">
						<section class="flex justify-between">
							<h2
								class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl sm:leading-none"
							>
								{movie.title}
							</h2>
							{#if movie.vote_average}
								<section class="flex items-center gap-2 p-2">
									<svg
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="w-5"
									>
										<path
											d="m12 17.328-5.403 3.286a.75.75 0 0 1-1.12-.813l1.456-6.155-4.796-4.123a.75.75 0 0 1 .428-1.316l6.303-.517 2.44-5.835a.75.75 0 0 1 1.384 0l2.44 5.835 6.303.517a.75.75 0 0 1 .427 1.316l-4.795 4.123 1.456 6.155a.75.75 0 0 1-1.12.813L12 17.328z"
											fill="#fff700"
										/>
									</svg>
									<p class="text-sm text-gray-600 dark:text-white font-semibold">
										{movie.vote_average?.toFixed(1)} / 10 ({movie.vote_count})
									</p>
								</section>
							{:else}
								<p class="mt-1.5 text-sm text-gray-700 dark:text-gray-400">No rating</p>
							{/if}
						</section>
						<p class="text-base text-gray-700 dark:text-gray-400 break-words">
							{movie.overview}
						</p>
						<div class="flex items-center gap-1 text-sm">
							<p class="text-gray-700 dark:text-gray-300 font-semibold">Type:</p>
							<span class="text-gray-600 dark:text-white"> Movie </span>
						</div>
						<div class="flex items-center gap-1 text-sm">
							<p class="text-gray-700 dark:text-gray-300 font-semibold">Release:</p>
							<span class="text-gray-600 dark:text-white">
								{new Date(movie.release_date).toLocaleDateString('en-us', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}
							</span>
						</div>
						<div class="flex items-center gap-1 text-sm">
							<p class="text-gray-700 dark:text-gray-300 font-semibold">Genres:</p>
							{#each movie.genres as genre, i}
								<span class="text-gray-600 dark:text-white">
									{genre.name}{movie.genres.length - 1 !== i ? ', ' : ''}</span
								>
							{/each}
						</div>
						<div class="flex flex-wrap items-center gap-1 text-sm">
							<p class="text-gray-700 dark:text-gray-300 font-semibold">Production:</p>
							{#each movie.production_companies as production, i}
								<span class="text-gray-600 dark:text-white">
									{production.name}{movie.production_companies.length - 1 !== i ? ', ' : ''}
								</span>
							{/each}
						</div>
						<!-- <div class="mt-6 flex items-center md:justify-center">
								<a
									href="/"
									class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-400 hover:bg-orange-500 focus:shadow-outline focus:outline-none"
								>
									<svg class="w-10 text-gray-100" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"
										/>
									</svg>
									Watch now
								</a>
							</div> -->
					</div>
				</section>
			{:else}
				<DetailShimmer />
			{/if}
		</div>
	</div>
	<h3 class="ml-20 text-xl text-gray-700 font-bold mt-20 mb-5">Similar movies</h3>
	<MoviesList {similar} />
</section>

<style>
	.loading {
		@apply pointer-events-none bg-gray-500;
	}
</style>

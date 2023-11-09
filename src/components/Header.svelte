<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	import sun from '$lib/icons/sun.svg';
	import moon from '$lib/icons/moon.svg';
	import filterIcon from '$lib/icons/filter.svg';
	import Preview from './Preview.svelte';
	import { getPopularMovies } from '../services/Movies.service';
	export let dark = false;
	const dispatch = createEventDispatcher();
	let searchQuery = '';
	let searchFilters: any = [];
	let movies: any = [];
	let scrollInterval: number;
	let scrollPosition: any = 0;

	$: filter = {
		adult: false
	};
	$: viewFilter = false;

	const toggleFilter = () => {
		viewFilter = !viewFilter;
	};

	const scroll = () => {
		const scrollBar = document.querySelector('#carousel1');
		scrollPosition = scrollBar?.scrollLeft + 1100;
		scrollBar?.scrollTo(scrollPosition, 0);
		console.log(scrollBar.scrollWidth - scrollPosition);
		if (scrollBar?.scrollWidth - scrollPosition <= 0) scrollBar?.scrollTo(0, 0);
		console.log(scrollBar?.scrollLeft, scrollPosition);
	};

	const handleSearch = (e: any) => {
		const searchOptions = {
			searchQuery,
			searchFilters
		};
		console.log('search movie', searchQuery);
		if (e.code === 'Enter') {
			dispatch('search', searchQuery);
		}
	};

	onMount(async () => {
		const res = await getPopularMovies();
		movies = res.data.results;

		scrollInterval = setInterval(() => {
			scroll();
		}, 10000);
		console.log('Movies', movies);
	});

	onDestroy(() => {
		clearInterval(scrollInterval);
	});
</script>

<header aria-label="Page Header" class="pb-4 top-0 z-50">
	<div id="header" class="w-full h-[25rem] p-4 sm:px-6 lg:px-8 shadow-md">
		<div class="flex items-center justify-between gap-4">
			<button class="relative z-50">
				<a href="/" class="text-2xl">Re-View</a>
			</button>
			<div
				class="absolute top-0 left-0 w-full flex items-center overflow-auto movies-container"
				id="carousel1"
			>
				{#each movies as movie}
					<span class="min-w-full movie">
						<Preview {movie} />
					</span>
				{/each}
			</div>
			<section class="flex gap-2 items-center">
				<div class="relative">
					<label class="sr-only" for="search"> Search </label>

					<input
						class="h-10 w-full rounded-full border-none bg-white dark:bg-gray-800 pl-4 pr-10 text-sm shadow-sm sm:w-56 dark:text-white transition focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700"
						id="search"
						type="search"
						placeholder="Search movies..."
						bind:value={searchQuery}
						on:keyup={handleSearch}
					/>

					<button
						on:click={() => handleSearch}
						class="absolute top-1/2 right-10 -translate-y-1/2 rounded-full bg-gray-50 dark:bg-gray-800 p-2 text-gray-600 dark:text-gray-300 transition hover:text-gray-700"
					>
						<span class="sr-only">Search</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
					<button
						on:click={toggleFilter}
						class="absolute top-0 right-1 flex items-center justify-center focus:outline-none hover:border-transparent text-gray-700 dark:text-white ml-3 bg-white dark:bg-gray-800 rounded-full p-3 transition hover:bg-gray-100 z-50"
					>
						<!-- filter search button -->
						<img alt="filter" class="w-4 h-4 dark:invert" src={filterIcon} />
					</button>
				</div>
				<button
					on:click
					class="flex items-center justify-center focus:outline-none hover:border-transparent text-gray-700 dark:text-white relative ml-3 rounded-full p-3 transition"
				>
					{#if dark}
						<img class="w-4 h-4 invert" src={sun} alt="" />
					{:else}
						<img class="w-4 h-4 invert" src={moon} alt="" />
					{/if}
				</button>
			</section>
		</div>
		<section class:hidden={!viewFilter}>
			<label class="inline-flex relative items-center my-auto cursor-pointer">
				<input type="checkbox" class="sr-only peer" checked={filter.adult} />
				<div
					class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
				/>
				<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Adult</span>
			</label>
		</section>
	</div>
</header>

<style>
	#header {
		background-image: radial-gradient(
			50% 50% at 50% 50%,
			rgba(0, 0, 0, 0.342) 0%,
			rgba(0, 0, 0, 0.555) 100%
		);
	}
	button a {
		font-family: 'Rubik Distressed', cursive !important;
	}
	.movies-container {
		width: 100%;
		scroll-behavior: smooth;
		scroll-snap-type: x mandatory;
	}

	.movies-container .movie {
		scroll-snap-align: center;
	}

	*::-webkit-scrollbar {
		display: none;
	}
</style>

<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	import sun from '$lib/icons/sun.svg';
	import moon from '$lib/icons/moon.svg';
	import filterIcon from '$lib/icons/filter.svg';
	import Preview from './Preview.svelte';
	import { getPopularMovies, getPopularSeries, searchMultiple } from '../services/Movies.service';
	import { page } from '$app/stores';
	import DotLoader from '../components/DotLoader.svelte';

	export let dark = false;
	export let showList = true;
	const dispatch = createEventDispatcher();

	let lookUpResults: any = [];
	let searchQuery = '';
	let searchFilters: any = [];
	let movies: any = [];
	let scrollInterval: number;
	let scrollPosition: any = 0;
	$: url = $page.url.search;
	$: filter = {
		adult: false
	};
	$: viewFilter = false;
	$: lookingUp = false;

	const toggleFilter = () => {
		viewFilter = !viewFilter;
	};

	const lookUpMovies = async (ev: any) => {
		lookingUp = true;
		const res = await searchMultiple(searchQuery);
		lookUpResults = res.data.results?.filter(
			(res: any) => res.media_type === 'tv' || res.media_type === 'movie'
		);
		lookingUp = false;
		console.log('lookup res', lookUpResults);
		if (ev.key === 'Enter') {
			dispatch('search', searchQuery);
		}
	};

	const toggleDark = () => {
		const htmlElementDom = document.querySelector('html');
		htmlElementDom?.classList.value.includes('dark') ? (dark = false) : (dark = true);
		htmlElementDom?.classList.toggle('dark');
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
		if (url !== '' && url.indexOf('type=') !== -1) {
			const queryParam = 'type=';
			const startIndex = url.indexOf(queryParam);
			if (startIndex !== -1) {
				console.log('Url', url !== '' && url.indexOf('type=') !== -1);
				const encodedText = url.substring(startIndex + queryParam.length);
				const decodedText = decodeURIComponent(encodedText);
				console.log('Decoded', decodedText);
				if (decodedText === `'movies'`) {
					const res = await getPopularMovies();
					movies = res.data.results;
				} else {
					const res = await getPopularSeries();
					movies = res.data.results;
				}
			}
		} else {
			const res = await getPopularMovies();
			const res2 = await getPopularSeries();
			movies = [...res.data.results, ...res2.data.results];
		}

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
	<div
		id="header"
		class="w-full h-[25rem] px-1.5 py-4 sm:px-6 lg:px-8 shadow-md"
		class:h-fit={!showList}
	>
		<div class="flex items-center justify-between gap-2 sm:gap-4">
			<button class="relative z-50" class:ml-12={!showList}>
				<a href="/" class="text-2xl" class:font-semibold={!showList}>Re-View</a>
			</button>
			{#if showList}
				<div
					class="absolute top-0 left-0 w-full flex items-center overflow-auto movies-container"
					id="carousel1"
				>
					{#each movies as movie}
						<span class="min-w-full movie" />
					{/each}
				</div>
			{/if}
			<section class="flex gap-2 items-center relative">
				<div class="relative z-50">
					<label class="sr-only" for="search"> Search </label>

					<input
						class="h-10 sm:w-[25rem] rounded-full border-none bg-white dark:bg-gray-800 pl-4 pr-10 text-sm shadow-sm dark:text-white transition focus:outline-none focus:ring-2 focus:ring-orange-300 dark:focus:ring-gray-700"
						id="search"
						type="search"
						placeholder="Search movies..."
						bind:value={searchQuery}
						on:keyup={lookUpMovies}
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
					on:click={toggleDark}
					class="flex items-center justify-center focus:outline-none hover:border-transparent text-gray-700 dark:text-white relative ml-3 rounded-full p-3 transition"
				>
					{#if dark}
						<img class="w-4 h-4 dark:invert" class:invert={showList} src={sun} alt="" />
					{:else}
						<img class="w-4 h- dark:invert" class:invert={showList} src={moon} alt="" />
					{/if}
				</button>
				{#if lookUpResults.length}
					<div
						class="grid justify-items-center bg-white dark:text-white dark:bg-gray-900/90 top-6 pt-4 rounded-b-lg pb-2 w-[25rem] px-2 h-60 overflow-y-auto overflow-x-hidden absolute z-40"
					>
						{#if lookingUp}
							<div>
								<DotLoader />
							</div>
						{:else}
							{#each lookUpResults as result}
								<a
									href="/detail/{result.title ? 'movie' : 'tv'}/{result.id}"
									role="button"
									tabindex="0"
									class="flex items-center gap-2 w-full text-gray-800 dark:text-gray-200 hover:bg-gray-500/40 dark:hover:bg-gray-950/40 rounded-lg p-2"
								>
									{#if result?.backdrop_path}
										<img
											class="w-16 h-16 object-cover text-sm rounded-md"
											src={`https://image.tmdb.org/t/p/w500${result?.backdrop_path}`}
											alt={result.title}
										/>
									{:else if result?.poster_path}
										<img
											class="w-16 h-16 object-cover text-sm"
											src={`https://image.tmdb.org/t/p/w500${result?.poster_path}`}
											alt={result.title}
										/>
									{/if}
									<div class="w-full grid">
										<h2 class="font-bold text-sm">{result.title || result.original_name}</h2>
										<div class="W-full flex items-center justify-between">
											<span class="text-xs font-light"
												>{result?.release_date || result.first_air_date || 'N/A'}</span
											>
											<span
												class="text-right uppercase text-xs bg-gray-100 text-gray-800 font-semibold py-1 rounded-full px-2"
												>{result?.media_type}</span
											>
											<div>
												<span class="flex gap-2">
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
													{result?.vote_average?.toFixed(1)}
												</span>
											</div>
										</div>
									</div>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
			</section>
		</div>
		<section class:hidden={!viewFilter}>
			<label class="inline-flex relative items-center my-auto cursor-pointer">
				<input type="checkbox" class="sr-only peer" checked={filter.adult} />
				<div
					class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
				/>
				<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Adult</span>
			</label>
		</section>
	</div>
</header>

<style>
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

<script lang="ts">
	import { onMount } from 'svelte';
	import { getPopularMovies, getTrending, searchMultiple } from '../services/Movies.service';
	import DotLoader from '../components/DotLoader.svelte';
	import { goto } from '$app/navigation';

	$: dark = true;
	$: movies = [{}];
	$: loading = false;
	$: lookingUp = false;
	$: latest = {} as any;
	let showMenu = false;

	let query = '';
	let lookUpResults: any = [];

	const toggleDark = () => {
		const htmlElementDom = document.querySelector('html');
		htmlElementDom?.classList.value.includes('dark') ? (dark = false) : (dark = true);
		htmlElementDom?.classList.toggle('dark');
	};

	const fetchPopular = async () => {
		loading = true;
		const response = await getPopularMovies();
		loading = false;
		console.log(response);
		movies = [...response.data.results];
		const response2 = await getTrending();
		const data = response2.data.results;
		latest = data.length ? data[0] : undefined;
		console.log('Latest', data[0]);
	};

	const lookUpMovies = async (ev: any) => {
		lookingUp = true;
		const res = await searchMultiple(query);
		lookUpResults = res.data.results?.filter(
			(res: any) => res.media_type === 'tv' || res.media_type === 'movie'
		);
		lookingUp = false;
		console.log('lookup res', lookUpResults);
		if (ev.key === 'Enter') {
			goto(`/home?query=${query}`);
		}
	};

	const searchWithParams = (result: any) => {
		goto(`/home?query=${result.title}`);
	};

	onMount(() => {
		fetchPopular();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Re-View" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Nerko+One&family=Rubik+Distressed&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="bg-gray-700 min-h-screen relative faded faded-left faded-right faded-top faded-bottom">
	<img
		alt=""
		src={`https://image.tmdb.org/t/p/original${latest?.backdrop_path}`}
		class="absolute top-0 left-0 w-full h-full object-cover object-center opacity-40"
	/>
	<nav
		class="w-full max-w-full overflow-clip flex items-center sm:p-8 p-4 pt-6 pb-32 sm:pb-12 justify-between relative z-10"
	>
		<button class="text-2xl w-1/4 max-sm:w-fit">
			<a href="/">Re-view</a>
		</button>
		<nav
			class="absolute max-sm:hidden top-16 flex items-center justify-center gap-8 sm:static text-orange-500 w-full"
		>
			<a
				class="text-gray-200 font-semibold dark:hover:text-orange-500 hover:text-orange-500 hover:underline underline-offset-4"
				href="/home">Browse</a
			>
			<a
				class="text-gray-200 font-semibold dark:hover:text-orange-500 hover:text-orange-500 hover:underline underline-offset-4"
				href="/home?type=movies">Movies</a
			>
			<a
				class="text-gray-200 font-semibold dark:hover:text-orange-500 hover:text-orange-500 hover:underline underline-offset-4"
				href="/home?type=series">Series</a
			>
		</nav>
		<div class="flex max-sm:hidden items-center gap-3 w-1/4 max-sm:w-fit justify-end">
			<button
				class="bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent font-bold text-xl"
			>
				Login
			</button>
		</div>

		<!-- add a menu containing browser, movies, series and login -->
		<div class="sm:hidden relative">
			<button
				class="p-2 rounded-full text-white focus:outline-none"
				on:click={() => (showMenu = !showMenu)}
				aria-label="Open menu"
			>
				<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
			{#if showMenu}
				<div
					class="fixed inset-0 z-40"
					on:click={() => (showMenu = false)}
					style="background: transparent;"
				/>
				<div
					class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded-lg shadow-lg z-50 animate-fade-in"
				>
					<a
						href="/home"
						class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
						>Browse</a
					>
					<a
						href="/home?type=movies"
						class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
						>Movies</a
					>
					<a
						href="/home?type=series"
						class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
						>Series</a
					>
					<a
						href="#"
						class="block px-4 py-2 text-orange-500 font-bold hover:bg-gray-100 dark:hover:bg-gray-800"
						>Login</a
					>
				</div>
			{/if}
		</div>
	</nav>
	<div class="grid justify-items-center gap-4 relative z-10">
		<div class="grid justify-items-center w-full sm:w-[30rem] gap-5 max-w-full">
			<h2 class="text-center text-4xl sm:text-5xl font-bold text-white font-serif">
				Welcome to Re-view Movies
			</h2>
			<p class="text-center text-gray-200 leading-6">
				Search and get a preview of more than <span class="text-orange-500">1.6 million</span> movies.
				Find trailers, read reviews, and discover what other people are saying about your favorite films.
			</p>
		</div>
		<div class="box-border grid justify-items-center w-full">
			<div class="px-8 py-3 relative w-full sm:w-[35rem] z-20">
				<svg
					class="w-14 h-14 px-4 py-2 absolute top-1/2 -translate-y-1/2 left-9 bg-gradient-to-br text-gray-600 dark:text-gray-400 font-semibold"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<input
					on:keyup={lookUpMovies}
					bind:value={query}
					placeholder="What would you like to see?"
					type="text"
					class="py-3 pl-12 pr- w-full text-gray-900 dark:text-white dark:bg-gray-950 rounded-full focus-visible:outline-none focus-visible:shadow-lg"
				/>
			</div>
			{#if lookUpResults.length}
				<div
					class="grid justify-items-center bg-white dark:text-white dark:bg-gray-950/90 relative -top-5 pt-4 rounded-b-lg pb-2 w-full max-w-xs sm:w-[30rem] px-2 h-60 overflow-y-auto overflow-x-hidden"
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
													{result?.vote_average?.toFixed(1)}
												</svg></span
											>
										</div>
									</div>
								</div>
							</a>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
	</div>
</main>

<style>
	* {
		font-family: 'Fira Sans Condensed', sans-serif;
		transition: all 0.3s ease;
	}
	button a {
		font-family: 'Rubik Distressed', cursive !important;
	}
	.faded {
		position: relative;
		display: inline-block;
		color: white;
		width: 100%;
	}
	.faded:after {
		content: '';
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-collapse: separate;
	}
	.faded.faded-left:after {
		box-shadow: inset 5rem 0 5rem -1rem #242424;
	}
	.faded.faded-right:after {
		box-shadow: inset -5rem 0 5rem -1rem #242424;
	}
	.faded.faded-top:after {
		box-shadow: inset 0 5rem 5rem -1rem #242424;
	}
	.faded.faded-bottom:after {
		box-shadow: inset 0 -5rem 5rem -1rem #242424;
	}
	main {
		/* content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.2; Adjust the opacity value as needed */
		background-image: repeating-linear-gradient(
				90deg,
				rgba(140, 140, 140, 0.1) 0px,
				rgba(140, 140, 140, 0.1) 1px,
				transparent 1px,
				transparent 60px
			),
			repeating-linear-gradient(
				0deg,
				rgba(140, 140, 140, 0.1) 0px,
				rgba(140, 140, 140, 0.1) 1px,
				transparent 1px,
				transparent 60px
			),
			repeating-linear-gradient(
				0deg,
				rgba(140, 140, 140, 0.1) 0px,
				rgba(140, 140, 140, 0.1) 1px,
				transparent 1px,
				transparent 20px
			),
			repeating-linear-gradient(
				90deg,
				rgba(140, 140, 140, 0.1) 0px,
				rgba(140, 140, 140, 0.1) 1px,
				transparent 1px,
				transparent 20px
			),
			linear-gradient(90deg, #242424, #242424);
		/* background: #0006 url($lib/images/background.jpg) fixed; */
		/* background-blend-mode: overlay; */
		background-position: center;
		background-size: cover;
	}

	*::-webkit-scrollbar {
		/* Customize the scrollbar for WebKit browsers */
		width: 5px;
	}

	*::-webkit-scrollbar-track {
		/* Customize the track */
		background-color: #f1f1f1;
	}

	*::-webkit-scrollbar-thumb {
		/* Customize the thumb */
		background-color: #888;
		border-radius: 5px;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fade-in {
		animation: fade-in 0.2s ease;
	}
</style>

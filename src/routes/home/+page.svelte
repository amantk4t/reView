<script lang="ts">
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import Movie from '../../components/Movie.svelte';
	import Preview from '../../components/Preview.svelte';
	import Loader from '../../components/Loader.svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import {
		getTrending,
		getPopularMovies,
		getPopularSeries,
		searchMovies
	} from '../../services/Movies.service';
	import { page } from '$app/stores';

	$: dark = true;
	$: movies = [{}];
	$: trending = [] as any[];
	$: loading = false;
	$: resData = Response;
	$: url = $page.url.search;

	type MovieType = 'movie' | 'tv';

	const fetchTrending = async (type?: MovieType) => {
		loading = true;
		const response = await getTrending(type ?? 'all');
		loading = false;
		console.log('Trending', response);
		resData = { ...response.data };
		trending = [...response.data.results];
	};

	const fetchPopularMovies = async () => {
		await fetchTrending('movie');
		loading = true;
		const response = await getPopularMovies();
		loading = false;
		console.log('Movies', response);
		resData = { ...response.data };
		movies = [...response.data.results];
	};

	const fetchPopularSeries = async () => {
		await fetchTrending('tv');
		loading = true;
		const response = await getPopularSeries();
		loading = false;
		console.log('Series', response);
		resData = { ...response.data };
		movies = [...response.data.results];
	};

	const searchMovie = async (e: any) => {
		loading = true;
		console.log('forwarded', e.detail);
		const response: any = await searchMovies(e.detail);
		loading = false;
		console.log(response);
		movies = response.data.results;
	};

	const handleMoviePages = async (e: any) => {
		const page = e.detail;
		loading = true;
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=336d8f817c1d2a54717df29483ea4d8b&language=en-US&page=${page}`
		);
		loading = false;
		movies = response.data.results;
		console.log('handleMoviePages');
	};
	onMount(async () => {
		if (url !== '' && url.indexOf('query=') !== -1) {
			const queryParam = 'query=';
			const startIndex = url.indexOf(queryParam);

			if (startIndex !== -1) {
				const encodedText = url.substring(startIndex + queryParam.length);
				const decodedText = decodeURIComponent(encodedText);
				const type: MovieType = decodedText === 'movie' ? 'movie' : 'tv';
				await fetchTrending(type);
				console.log('Decoded', decodedText);
				const q = {
					detail: decodedText
				};
				await searchMovie(q);
			}
		} else if (url !== '' && url.indexOf('type=') !== -1) {
			const queryParam = 'type=';

			console.log('🚀 ~ onMount ~ queryParam:', queryParam);

			const startIndex = url.indexOf(queryParam);
			if (startIndex !== -1) {
				const encodedText = url.substring(startIndex + queryParam.length);

				const decodedText = decodeURIComponent(encodedText);

				if (decodedText === 'movies') await fetchPopularMovies();
				else await fetchPopularSeries();
			}
		} else fetchPopularMovies();
	});
</script>

<svelte:head>
	<title>Re-view Movies</title>
	<meta name="description" content="Watch" />
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

<main class="dark:bg-gray-900 min-h-screen">
	<Header on:search={searchMovie} {dark} />
	<!-- attach prop movie -->

	<span class="min-w-full movie">
		<Preview movies={trending} />
	</span>

	<h2 class="text-gray-800 font-semibold mx-2 dark:text-white text-xl pl-4 pb-4 pt-8">Popular</h2>
	{#if loading}
		<Loader />
	{:else if movies.length === 0}
		<h1 class="text-4xl text-center text-gray-500">No movies found</h1>
	{:else}
		<section class="flex flex-wrap gap-4 items-center justify-around px-4">
			{#each movies as movie}
				<Movie {movie} />
			{/each}
		</section>
	{/if}
	<Footer
		curentPage={resData?.page}
		totalPages={resData?.total_pages}
		on:changePage={handleMoviePages}
	/>
</main>

<style>
	* {
		font-family: 'Fira Sans Condensed', sans-serif;
		transition: all 0.3s ease;
	}
</style>

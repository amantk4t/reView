<script lang="ts">
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import Movie from '../../components/Movie.svelte';
	import Loader from '../../components/Loader.svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { getPopularMovies, getPopularSeries, searchMovies } from '../../services/Movies.service';
	import { page } from '$app/stores';

	$: dark = true;
	$: movies = [{}];
	$: loading = false;
	$: resData = Response;
	$: url = $page.url.search;

	const fetchMovies = async () => {
		loading = true;
		const response = await getPopularMovies();
		loading = false;
		console.log('Movies', response);
		resData = { ...response.data };
		movies = [...response.data.results];
	};

	const fetchSeries = async () => {
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
				console.log('Decoded', decodedText);
				const q = {
					detail: decodedText
				};
				await searchMovie(q);
			}
		} else if (url !== '' && url.indexOf('type=') !== -1) {
			const queryParam = 'type=';
			const startIndex = url.indexOf(queryParam);
			if (startIndex !== -1) {
				console.log('Url', url !== '' && url.indexOf('type=') !== -1);
				const encodedText = url.substring(startIndex + queryParam.length);
				const decodedText = decodeURIComponent(encodedText);
				if (decodedText === `'movies'`) await fetchMovies();
				else await fetchSeries();
			}
		} else fetchMovies();
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
	<h2 class="text-gray-800 font-semibold mx-2 dark:text-white">Popular</h2>
	{#if loading}
		<Loader />
	{:else if movies.length === 0}
		<h1 class="text-4xl text-center text-gray-500">No movies found</h1>
	{:else}
		<section class="flex flex-wrap gap-4 items-center justify-around">
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

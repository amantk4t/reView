<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Movie from "../components/Movie.svelte";
  import Loader from "../components/Loader.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  $: dark = true;
  $: movies = [{}];
  $: loading = false;
  $: resData = Response;

  const toggleDark = () => {
    const htmlElementDom = document.querySelector("html");
    htmlElementDom.classList.value.includes("dark")
      ? (dark = false)
      : (dark = true);
    htmlElementDom.classList.toggle("dark");
  };

  const fetchMovies = async () => {
    loading = true;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=336d8f817c1d2a54717df29483ea4d8b&language=en-US&page=`
    );
    loading = false;
    console.log(response);
    resData = { ...response.data };
    movies = [...response.data.results];
  };

  const searchMovie = async (e) => {
    loading = true;
    console.log("forwarded", e.detail);
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=336d8f817c1d2a54717df29483ea4d8b&query=${e.detail}&language=en-US&page=1&include_adult=false`
    );
    loading = false;
    console.log(response);
    movies = response.data.results;
  };

  const handleMoviePages = async (e) => {
    const page = e.detail;
    loading = true;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=336d8f817c1d2a54717df29483ea4d8b&language=en-US&page=${page}`
    );
    loading = false;
    movies = response.data.results;
    console.log("handleMoviePages");
  };
  onMount(() => {
    fetchMovies();
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

<main class="dark:bg-gray-900 min-h-screen">
  <Header on:search={searchMovie} on:click={toggleDark} {dark} />
  <!-- attach prop movie -->
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
    font-family: "Fira Sans Condensed", sans-serif;
    transition: all 1s ease;
  }
</style>

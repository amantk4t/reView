<script lang="ts">
  import type { PageData } from "./$types";
  import MovieCarousel from "../../../components/MovieCarousel.svelte";
  import DetailShimmer from "../../../components/DetailShimmer.svelte";
  import YouTubePlayer from "../../../components/YouTubePlayer.svelte";
  import { onMount } from "svelte";
  export let data: PageData;

  let movieData = {
    adult: false,
    backdrop_path: "/90ZZIoWQLLEXSVm0ik3eEQBinul.jpg",
    belongs_to_collection: null,
    budget: 0,
    genres: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 27,
        name: "Horror",
      },
      {
        id: 53,
        name: "Thriller",
      },
    ],
    homepage: "",
    id: 988233,
    imdb_id: "tt6969338",
    original_language: "en",
    original_title: "Hex",
    overview:
      "Following a mysterious disappearance on a jump, a group of skydivers experiences paranormal occurrences that leave them fighting for their lives.",
    popularity: 1349.759,
    poster_path: "/xFJHb43ZAnnuiDztxZYsmyopweb.jpg",
    production_companies: [
      {
        id: 177201,
        logo_path: null,
        name: "Hex Movie",
        origin_country: "",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "2022-11-01",
    revenue: 0,
    runtime: 88,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
    ],
    status: "Released",
    tagline: "Jump. Pull. Pray. Die.",
    title: "Hex",
    video: false,
    vote_average: 5.176,
    vote_count: 17,
  };

  $: movie = data.movie;
  $: similar = data.similar;
  $: videos = data.videos;
  $: loading = false;
  $: loadingMovie = data.loading;
  onMount(() => {
    console.log("loading", loadingMovie);
    console.log("movie", movie);
  });
</script>

<svelte:head>
  <title>{movie.title}</title>
  <meta name="description" content="Details page" />
</svelte:head>

<section class="dark:bg-gray-900">
  <div class="flex justify-center">
    <a
      href="/"
      class="flex items-center justify-center w-10 h-10 transition duration-300 transform dark:bg-gray-200  rounded-full shadow-2xl absolute top-5 left-5 z-50 hover:bg-gray-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-800 dark:text-gray-800"
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
    </a>
  </div>
  <div class="max-w-full">
    <div class="mb-4">
      <YouTubePlayer {movie} {videos} />
    </div>
    <div class="flex flex-col items-center justify-center ">
      {#if movie.title !== undefined && !loading}
        <h2
          class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl sm:leading-none"
        >
          {movie.title}
        </h2>
        <p
          class="text-center text-base text-gray-700 dark:text-gray-400 max-w-md break-words"
        >
          {movie.overview}
        </p>
        <div class="flex gap-16 items-center py-4">
          {#each movie.genres as genre}
            <span
              class="text-gray-200 dark:text-white px-4 py-2 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 dark:from-gray-800 dark:to-gray-900"
              >{genre.name}</span
            >
          {/each}
        </div>
        <div class="mt-6 flex items-center md:justify-center">
          <a
            href="/"
            class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-400 hover:bg-orange-500 focus:shadow-outline focus:outline-none"
          >
            <svg
              class="w-10 text-gray-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"
              />
            </svg>
            Watch now
          </a>
        </div>
      {:else}
        <DetailShimmer />
      {/if}
    </div>
  </div>
  <h3 class="ml-4 text-lg text-orange-500 font-bold  mt-20 mb-5">
    Similar movies
  </h3>
  <MovieCarousel {similar} />
</section>

<style>
  .loading {
    @apply pointer-events-none bg-gray-500;
  }
</style>

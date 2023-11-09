<script lang="ts">
  import SpinLoader from "./SpinLoader.svelte";

  interface Video {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
  }

  interface Movie {
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
  }

  export let videos: Video[];

  export let movie: Movie;

  $: video = videos[0];
  $: loading = false;
  $: playVideo = false;

  const fetchYTVideo = async () => {
    console.log("fetching video");
    loading = true;
    playVideo = true;
  };

  const prevVideo = () => {
    const index = videos.indexOf(video);
    console.log(index);
    if (index > 0) {
      video = videos[index - 1];
    }
  };

  const nextVideo = () => {
    const index = videos.indexOf(video);
    console.log(index);
    if (index < videos.length - 1) {
      video = videos[index + 1];
    }
  };
</script>

<div
  class="relative mt-5 md:mb-0 w-[95vw] sm:w-[75vw] mx-auto sm:h-[65vh] min-h-[400px] max-w-full"
>
  {#if playVideo}
    <button
      on:click={prevVideo}
      class="bg-gray-900/60 rounded-full p-2 absolute left-3 top-[43%] z-50"
    >
      <svg
        class="w-10 text-gray-100"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation"
      >
        <path
          d="M7.47,11.152l8-5C15.779,5.958,16.167,5.949,16.485,6.125C16.803,6.302,17,6.636,17,7v10 c0,0.364-0.197,0.698-0.515,0.875C16.333,17.958,16.167,18,16,18c-0.184,0-0.368-0.051-0.53-0.152l-8-5C7.178,12.665,7,12.345,7,12 S7.178,11.335,7.47,11.152z"
        />
      </svg>
    </button>
    <div
      class="absolute w-full h-full top-0 left-0 z-30 rounded-lg  bg-gray-400/50"
    >
      <div class="relative w-full h-full">
        <iframe
          title={video?.name}
          src={`https://www.youtube.com/embed/${video.key}?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`}
          frameborder="0"
          allowfullscreen
          class="absolute top-0 left-0 w-full h-full rounded-lg"
          on:loadeddata={(loading = false)}
        />
      </div>
    </div>

    <button
      on:click={nextVideo}
      class="rotate-180 bg-gray-900/60 rounded-full p-2 absolute right-3  top-[43%] z-50"
    >
      <!-- right button -->
      <svg
        class="w-10 text-gray-100"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation"
      >
        <path
          d="M7.47,11.152l8-5C15.779,5.958,16.167,5.949,16.485,6.125C16.803,6.302,17,6.636,17,7v10 c0,0.364-0.197,0.698-0.515,0.875C16.333,17.958,16.167,18,16,18c-0.184,0-0.368-0.051-0.53-0.152l-8-5C7.178,12.665,7,12.345,7,12 S7.178,11.335,7.47,11.152z"
        />
      </svg>
    </button>
  {:else}
    <img
      alt={movie.title}
      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      class="absolute z-40 object-cover w-full h-full shadow-lg rounded-lg"
    />
    <button
      on:click={fetchYTVideo}
      aria-label="Play Video"
      class:loading
      class="absolute inset-0 top-0 flex items-center justify-center w-screen max-w-full h-full transition-colors duration-300 bg-gray-800 bg-opacity-50 group hover:bg-opacity-25  rounded-lg z-40"
    >
      <div
        class="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110"
      >
        {#if loading}
          <SpinLoader />
        {:else}
          <svg
            class="w-10 text-gray-900"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"
            />
          </svg>
        {/if}
      </div>
    </button>
  {/if}
</div>

<style>
</style>

<script context="module">
  const scroll = (x) => {
    const scrollBar = document.querySelector("#carousel");
    scrollBar?.scrollTo(scrollBar?.scrollLeft + x, 0);
    console.log(scrollBar?.scrollLeft);
    let scrollBarWidth = scrollBar?.scrollWidth - scrollBar?.clientWidth;
    if (scrollBar?.scrollLeft === scrollBarWidth) {
      scrollBar?.scrollTo(0, 0);
    } else {
    }
  };
</script>

<script>
  import Movie from "./Movie.svelte";
  export let similar = [{}];
</script>

<div id="carousel-container" class="relative">
  <div id="carousel" class="max-w-screen overflow-x-auto ">
    <section
      id="carousel-item"
      class="flex min-w-screen w-fit gap-4 items-center justify-around"
    >
      {#each similar as movie}
        <Movie {movie} carousel={true} />
      {/each}
    </section>
  </div>
  <button
    on:click={() => scroll(-100)}
    class="bg-gray-900/60 rounded-full p-2 absolute left-3 top-1/3"
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
  <button
    on:click={() => scroll(100)}
    class="rotate-180 bg-gray-900/60 rounded-full p-2 absolute right-3 top-1/3"
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
</div>

<style>
  /* use translate to move the carousel */

  #carousel {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scroll-behavior: smooth;
  }
  #carousel:hover #carousel-item,
  #carousel-container:hover #carousel #carousel-item {
    animation-play-state: paused;
  }
  /* hide scroll bar  */
  #carousel::-webkit-scrollbar {
    display: none;
  }
  /* add scroll animation to carousel */
  #carousel-item {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    /* animation: scroll 55s linear infinite; */
  }

  #carousel-container button {
    transition: transform 0.2s ease-in-out;
  }
  /* button bounce transition */
  #carousel-container button:hover {
    transform: scale(1.1) rotate();
  }

  /* scroll animation */
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100% + 100vw));
    }
  }
</style>

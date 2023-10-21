<script>
  export let movie = {};
  export let carousel = false;
  console.log(movie);
</script>

<a
  href="/detail/{movie.id}"
  class:carousel
  class="relative block overflow-hidden group w-60"
  on:click
>
  <img
    alt={movie.title}
    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
    class="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div class="relative mt-2">
    <h3 class="text-sm font-medium text-gray-900 dark:text-white">
      {movie.title}
    </h3>
  </div>
  <section class="flex items-end justify-between">
    <p class="mt-1.5 text-sm text-gray-700 dark:text-gray-400">
      {movie.vote_average} / 10
    </p>
    <p
      class="text-sm text-gray-700 dark:text-gray-200 font-bold px-2 rounded-full "
    >
      {movie.release_date?.slice(0, 4)}
    </p>
  </section>
</a>

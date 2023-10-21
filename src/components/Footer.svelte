<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let currentPage = 1;
  export let totalPages = 1;

  $: pages = Array(totalPages)
    .fill(0)
    .map((_, i) => i + 1);

  const dispatch = createEventDispatcher();

  const handlePageChange = (page: number) => {
    console.log("page", page);
    dispatch("changePage", page);
  };
</script>

<footer
  class="w-screen max-w-full h-44 flex justify-center items-center relative bottom-0 left-0"
>
  <nav aria-label="Page navigation">
    <ul class="inline-flex -space-x-px">
      <li class="cursor-pointer">
        <button
          on:click={() => {
            handlePageChange(currentPage - 1);
          }}
          class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>
      </li>
      {#each pages.slice(0, 10) as pageNumber}
        <li class="cursor-pointer">
          <button
            on:click={() => {
              handlePageChange(pageNumber);
            }}
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {pageNumber}
          </button>
        </li>
      {/each}
      <li class="cursor-pointer">
        <button
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          ...
        </button>
      </li>
      <li class="cursor-pointer">
        <button
          on:click={() => {
            handlePageChange(currentPage + 1);
          }}
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</footer>

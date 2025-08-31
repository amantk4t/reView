<script lang="ts">
	export let error: Error;
	export let status: number;
</script>

<main
	class="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 px-4"
>
	<div
		class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center"
	>
		<svg
			class="w-16 h-16 text-orange-500 mb-4"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
			/>
		</svg>
		<h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
			Oops! Something went wrong.
		</h1>
		<p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
			{status ? `Error ${status}` : 'An unexpected error occurred.'}
		</p>
		<p class="text-base text-gray-600 dark:text-gray-400 mb-4 break-words text-center">
			{error?.message}
		</p>
		{#if error?.stack}
			<details class="w-full mb-4">
				<summary class="cursor-pointer text-sm text-orange-500">Show technical details</summary>
				<pre
					class="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded p-2 overflow-x-auto">{error.stack}</pre>
			</details>
		{/if}
		<a
			href="/"
			class="mt-2 inline-block px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition"
			>Go Home</a
		>
	</div>
</main>

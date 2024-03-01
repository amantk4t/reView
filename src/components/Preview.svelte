<script lang="ts">
	import arrow from '$lib/icons/arrow.svg';
	export let movies: any[] = [];
	export let carousel: any = false;
	$: onDisplay = movies.length ? 0 : -1;

	const toDateString = (date: string) => {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: '2-digit'
		});
	};

	const changeCurrentDisplay = (dir: 'n' | 'p') => {
		console.log(dir === 'n');
		if (dir === 'n' && onDisplay + 1 < movies.length) {
			if (onDisplay + 1 < movies.length) onDisplay += 1;
		} else if (dir === 'p' && onDisplay) {
			onDisplay -= 1;
		}

		console.log('Ondisplay', onDisplay);
	};
</script>

{#if onDisplay !== -1}
	<div class="flex items-center justify-between pl-4 pr-8 py-2">
		<a
			href="/detail/{movies[onDisplay].title ? 'movies' : 'tv'}/{movies[onDisplay].id}"
			class:carousel
			class="relative hidden sm:block overflow-hidden group w-2/3 h-[35rem] rounded-3xl"
			on:click
		>
			<img
				alt={movies[onDisplay].title || movies[onDisplay].original_name}
				src={`https://image.tmdb.org/t/p/original${movies[onDisplay]?.backdrop_path}`}
				class="object-cover object-left-top w-full h-full transition duration-500 group-hover:scale-105"
			/>

			<div class="absolute top-[65%] p-4 mt-2 h-1/3 m-1 w-full px-8 bg-black/30">
				<h3 class="text-5xl font-bold text-gray-200 text-shadow mb-2">
					{movies[onDisplay].title || movies[onDisplay].original_name}
				</h3>
				<p class="text-gray-300 max-h-12 overflow-clip">{movies[onDisplay].overview}</p>
				<p
					class="text-sm text-gray-200 font-bold absolute left-0 bottom-5 px-8 py-2 w-full flex items-center justify-between gap-8"
				>
					<span>
						<section class="flex items-center gap-1">
							<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4">
								<path
									d="m12 17.328-5.403 3.286a.75.75 0 0 1-1.12-.813l1.456-6.155-4.796-4.123a.75.75 0 0 1 .428-1.316l6.303-.517 2.44-5.835a.75.75 0 0 1 1.384 0l2.44 5.835 6.303.517a.75.75 0 0 1 .427 1.316l-4.795 4.123 1.456 6.155a.75.75 0 0 1-1.12.813L12 17.328z"
									fill="#fff700"
								/>
							</svg>
							{#if movies[onDisplay].vote_average}
								<p class="mt-0.5 text-sm text-gray-200 dark:text-white">
									{movies[onDisplay].vote_average?.toFixed(1)}&nbsp;/&nbsp;10
								</p>
							{:else}
								<p class="mt-0.5 text-sm text-gray-700 dark:text-gray-400">No rating</p>
							{/if}
						</section>
					</span>
					<span>
						{movies[onDisplay].release_date?.slice(0, 4) ||
							movies[onDisplay].first_air_date?.slice(0, 4)}
					</span>
				</p>
			</div>
		</a>
		<section class="w-96 h-96 relative">
			<div class="bg-orange-300 w-full h-full rounded-3xl" />
			<div class="bg-white absolute top-0 left-0 rotate-6 w-full h-full rounded-3xl overflow-clip">
				<img
					src={`https://image.tmdb.org/t/p/original${movies[onDisplay + 1].backdrop_path}`}
					class="w-full h-full object-cover"
					alt={movies[onDisplay + 1].title}
				/>
				<div class="bg-black/30 w-full absolute bottom-0 p-8 grid gap-2.5">
					<h3 class="text-xl font-bold text-gray-200 text-shadow">
						{movies[onDisplay + 1].title || movies[onDisplay + 1].original_name}
					</h3>
					<section class="flex items-center justify-between">
						<div>
							<p class="text-gray-300 font-bold">
								{toDateString(movies[onDisplay + 1]?.release_date) ||
									toDateString(movies[onDisplay + 1]?.first_air_date)}
							</p>
						</div>

						<div class="flex items-center gap-2">
							<button
								class={(() => (onDisplay === 0 ? 'invisible' : 'visible'))()}
								on:click={() => changeCurrentDisplay('p')}
							>
								<img src={arrow} class="w-5 invert" alt="back_btn" />
							</button>
							<p>
								<span class="text-white">{onDisplay + 2}</span>
								<span class="text-white">&nbsp;/&nbsp;{movies.length}</span>
							</p>
							<button on:click={() => changeCurrentDisplay('n')}>
								<img src={arrow} class="w-5 invert rotate-180" alt="back_btn" />
							</button>
						</div>
					</section>
				</div>
			</div>
		</section>
	</div>
{/if}

<style>
	.text-shadow {
		text-shadow: 2px 2px 0 rgba(0, 0, 0, 1);
	}
	.text-shadow-light {
		text-shadow: 2px 2px 0 rgba(255, 255, 255, 1);
	}
</style>

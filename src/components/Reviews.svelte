<script lang="ts">
	import userIcon from '$lib/icons/user.svg';
	export let reviews = [{}] as any[];
</script>

<h2>Reviews</h2>
{#if reviews.length}
	{#each reviews as review}
		<article class="rounded-xl border-2 border-gray-800 bg-gray-800">
			<div class="flex items-start gap-4 p-1 sm:p-2 lg:p-4">
				<a href="#" class="block shrink-0">
					{#if review.author_details.avatar_path}
						<img alt="" src={review.author_details.avatar_path} class="size-14 rounded-lg object-cover" />
					{:else}
						<img alt="" src={userIcon} class="size-14 rounded-lg object-cover" />
					{/if}
				</a>

				<div>
					<h3 class="font-medium sm:text-lg">
						<a href="#" class="hover:underline" >{review.author}</a>
					</h3>

					<p class="line-clamp-3 text-sm text-gray-400">
						{review.content}
					</p>

					<div class="mt-2 sm:flex sm:items-center sm:gap-2">
						<div class="flex items-center gap-1 text-gray-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									d="m12 17.328-5.403 3.286a.75.75 0 0 1-1.12-.813l1.456-6.155-4.796-4.123a.75.75 0 0 1 .428-1.316l6.303-.517 2.44-5.835a.75.75 0 0 1 1.384 0l2.44 5.835 6.303.517a.75.75 0 0 1 .427 1.316l-4.795 4.123 1.456 6.155a.75.75 0 0 1-1.12.813L12 17.328z"
									fill="#fff700"
								/>
							</svg>

							<p class="text-xs">{review.author_details.rating} stars</p>
						</div>

						<span class="hidden sm:block" aria-hidden="true">&middot;</span>

						<p class="hidden sm:block sm:text-xs sm:text-gray-500">
							Posted by
							<a href="#" class="font-medium underline hover:text-gray-700"> {review.author} </a>
						</p>
					</div>
				</div>
			</div>

			<div class="flex justify-end">
				<strong
					class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-gray-900 px-3 py-1.5 text-white"
				>
					

					<span class="text-[10px] font-medium sm:text-xs">{(new Date(review.created_at)).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: '2-digit'})}</span>
				</strong>
			</div>
		</article>
	{/each}
{/if}

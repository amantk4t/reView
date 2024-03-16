import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	let loading = false;
	loading = true;
	let loadingOptions = false;
	console.log('Loading Movie ... ');
	try {
		if (params.id) {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${params.id}?api_key=${
					import.meta.env.VITE_API_KEY
				}&language=en-US`
			);
			
			loading = false;
			
			const movie = await res.json();

			const res3 = await fetch(
				`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${
					import.meta.env.VITE_API_KEY
				}&language=en-US`
			);
			let videos = await res3.json();

			
			videos.results = videos.results.filter(
				({ type, official }: { type: string; official: boolean }) => type === 'Trailer' && official
			);

			const res2 = await fetch(
				`https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=${
					import.meta.env.VITE_API_KEY
				}&language=en-US&page=1`
			);
			const reviews = await res2.json()

			console.log("🚀 ~ load ~ reviews:", reviews)


			const changeSelection = async (type: 'similar' | 'recommendations') => {
				loadingOptions = true;
				const res = await fetch(
					`https://api.themoviedb.org/3/movie/${params.id}/${type}?api_key=${
						import.meta.env.VITE_API_KEY
					}&language=en-US&page=1`
				);
				const data = await res.json()
				console.log(data);
				loadingOptions = false;

				return data
			}

			const selectedOption = await changeSelection('similar');
			return {
				id: params.id,
				type: params.type,
				movie,
				selectedOption: selectedOption.results,
				videos: videos.results,
				loading,
				reviews: reviews.results,
				loadingOptions,
				changeSelection
			};
		}
		error(404, 'Not found');
	} catch (error) {
		console.error(error);
	}
}) satisfies PageLoad;

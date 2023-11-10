import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	let loading = false;
	loading = true;
	console.log('Loading Movie ... ');
	if (params.id) {
		const res = await fetch(
			`https://api.themoviedb.org/3/tv/${params.id}?api_key=336d8f817c1d2a54717df29483ea4d8b&language=en-US`
		);
		loading = false;
		console.log('Movie loaded');
		console.log('Converting to JSON ... ');

		const movie = res.json();
		console.log('Done!');
		console.log('Loading Similar ... ');

		const res2 = await fetch(
			`https://api.themoviedb.org/3/tv/${params.id}/similar?api_key=336d8f817c1d2a54717df29483ea4d8b&language=en-US&page=1`
		);
		console.log('Similar loaded');

		const res3 = await fetch(
			`https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=336d8f817c1d2a54717df29483ea4d8b&language=en-US`
		);
		const videos = await res3.json();

		console.log(videos);

		const similar = await res2.json();
		return {
			id: params.id,
			movie,
			similar: similar.results,
			videos: videos.results,
			loading
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;

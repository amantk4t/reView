import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	let loading = false;
	loading = true;
	console.log('Loading Movie ... ');
	try {
		if (params.id) {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${params.id}?api_key=${
					import.meta.env.VITE_API_KEY
				}&language=en-US`
			);
			// const resMovie = await fetch(`https://api.vidplay.online/v1/`);
			// const resMovie = await fetch(`https://filemoonapi.com/api/account/info?key=1l5ftrilhllgwx2bo`);
			// console.log('Vid play res', await resMovie.json());
			// const resMovie = await fetch(`https://vidsrc.to/embed/movie/${params.id}`);
			// console.log('Vid play res', resMovie.body);
			loading = false;
			console.log('Movie loaded');
			console.log('Converting to JSON ... ');

			const movie = await res.json();
			console.log('Done!', movie);
			console.log('Loading Similar ... ');

			const res2 = await fetch(
				`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${
					import.meta.env.VITE_API_KEY
				}&language=en-US&page=1`
			);
			console.log('Similar loaded');

			const res3 = await fetch(
				`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${
					import.meta.env.VITE_API_KEY
				}&language=en-US`
			);
			let videos = await res3.json();

			console.log(videos);
			videos.results = videos.results.filter(
				({ type, official }: { type: string; official: boolean }) => type === 'Trailer' && official
			);

			const similar = await res2.json();
			return {
				id: params.id,
				type: params.type,
				movie,
				similar: similar.results,
				videos: videos.results,
				// movie_video: resMovie,
				loading
			};
		}
		error(404, 'Not found');
	} catch (error) {
		console.error(error);
	}
}) satisfies PageLoad;

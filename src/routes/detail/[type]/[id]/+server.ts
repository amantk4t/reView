export async function GET({ url }) {
	const id = url.searchParams.get('id');

	const res = await fetch(`https://multiembed.mov/?video_id=${id}&tmdb=1`);
	const html = await res.text();

	return new Response(html, {
		headers: {
			'Content-Type': 'text/html',
			'Access-Control-Allow-Origin': '*'
		}
	});
}

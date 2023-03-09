import { c as create_ssr_component, i as each, v as validate_component, f as add_attribute, e as escape } from "../../../../chunks/index.js";
import { M as Movie } from "../../../../chunks/Movie.js";
const MovieCarousel_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#carousel.svelte-xmkupm.svelte-xmkupm{overflow-x:auto;overflow-y:hidden;white-space:nowrap;-webkit-overflow-scrolling:touch;-ms-overflow-style:none;scroll-behavior:smooth}#carousel.svelte-xmkupm:hover #carousel-item.svelte-xmkupm,#carousel-container.svelte-xmkupm:hover #carousel #carousel-item.svelte-xmkupm{animation-play-state:paused}#carousel.svelte-xmkupm.svelte-xmkupm::-webkit-scrollbar{display:none}#carousel-item.svelte-xmkupm.svelte-xmkupm{scroll-snap-align:start;scroll-snap-stop:always}#carousel-container.svelte-xmkupm button.svelte-xmkupm{transition:transform 0.2s ease-in-out}#carousel-container.svelte-xmkupm button.svelte-xmkupm:hover{transform:scale(1.1) rotate()}@keyframes svelte-xmkupm-scroll{0%{transform:translateX(0)}100%{transform:translateX(calc(-100% + 100vw))}}",
  map: null
};
const MovieCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { similar = [{}] } = $$props;
  if ($$props.similar === void 0 && $$bindings.similar && similar !== void 0)
    $$bindings.similar(similar);
  $$result.css.add(css$1);
  return `<div id="${"carousel-container"}" class="${"relative svelte-xmkupm"}"><div id="${"carousel"}" class="${"max-w-screen overflow-x-auto  svelte-xmkupm"}"><section id="${"carousel-item"}" class="${"flex min-w-screen w-fit gap-4 items-center justify-around svelte-xmkupm"}">${each(similar, (movie) => {
    return `${validate_component(Movie, "Movie").$$render($$result, { movie, carousel: true }, {}, {})}`;
  })}</section></div>
	<button class="${"bg-gray-900/60 rounded-full p-2 absolute left-3 top-1/3 svelte-xmkupm"}"><svg class="${"w-10 text-gray-100"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}" role="${"presentation"}"><path d="${"M7.47,11.152l8-5C15.779,5.958,16.167,5.949,16.485,6.125C16.803,6.302,17,6.636,17,7v10 c0,0.364-0.197,0.698-0.515,0.875C16.333,17.958,16.167,18,16,18c-0.184,0-0.368-0.051-0.53-0.152l-8-5C7.178,12.665,7,12.345,7,12 S7.178,11.335,7.47,11.152z"}"></path></svg></button>
	<button class="${"rotate-180 bg-gray-900/60 rounded-full p-2 absolute right-3 top-1/3 svelte-xmkupm"}">
		<svg class="${"w-10 text-gray-100"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}" role="${"presentation"}"><path d="${"M7.47,11.152l8-5C15.779,5.958,16.167,5.949,16.485,6.125C16.803,6.302,17,6.636,17,7v10 c0,0.364-0.197,0.698-0.515,0.875C16.333,17.958,16.167,18,16,18c-0.184,0-0.368-0.051-0.53-0.152l-8-5C7.178,12.665,7,12.345,7,12 S7.178,11.335,7.47,11.152z"}"></path></svg></button>
</div>`;
});
const DetailShimmer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div role="${"status"}" class="${"w-80 max-w-sm animate-pulse text-center"}"><div class="${"h-10 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"}"></div>
	<div class="${"h-2 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"}"></div>
	<div class="${"h-2 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"}"></div>
	<div class="${"h-2 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"}"></div>
	<div class="${"h-2 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"}"></div>
	<div class="${"h-2 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"}"></div>
	<span class="${"sr-only"}">Loading...</span></div>

<div role="${"status"}" class="${"flex justify-center items-center w-20 h-12 px-16 mt-6 bg-gray-300 rounded-md animate-pulse dark:bg-gray-700"}"><svg class="${"w-6 h-6 text-gray-200 dark:text-gray-600"}" xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}" fill="${"currentColor"}" viewBox="${"0 0 384 512"}"><path d="${"M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"}"></path></svg>
	<span class="${"sr-only"}">Loading...</span></div>`;
});
const SpinLoader_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sk-chase.svelte-xwbd0w{width:40px;height:40px;position:relative;animation:svelte-xwbd0w-sk-chase 2.5s infinite linear both}.sk-chase-dot.svelte-xwbd0w{width:100%;height:100%;position:absolute;left:0;top:0;animation:svelte-xwbd0w-sk-chase-dot 2s infinite ease-in-out both}.sk-chase-dot.svelte-xwbd0w:before{content:'';display:block;width:25%;height:25%;background-color:#222;border-radius:100%;animation:svelte-xwbd0w-sk-chase-dot-before 2s infinite ease-in-out both}.sk-chase-dot.svelte-xwbd0w:nth-child(1){animation-delay:-1.1s}.sk-chase-dot.svelte-xwbd0w:nth-child(2){animation-delay:-1s}.sk-chase-dot.svelte-xwbd0w:nth-child(3){animation-delay:-0.9s}.sk-chase-dot.svelte-xwbd0w:nth-child(4){animation-delay:-0.8s}.sk-chase-dot.svelte-xwbd0w:nth-child(5){animation-delay:-0.7s}.sk-chase-dot.svelte-xwbd0w:nth-child(6){animation-delay:-0.6s}.sk-chase-dot.svelte-xwbd0w:nth-child(1):before{animation-delay:-1.1s}.sk-chase-dot.svelte-xwbd0w:nth-child(2):before{animation-delay:-1s}.sk-chase-dot.svelte-xwbd0w:nth-child(3):before{animation-delay:-0.9s}.sk-chase-dot.svelte-xwbd0w:nth-child(4):before{animation-delay:-0.8s}.sk-chase-dot.svelte-xwbd0w:nth-child(5):before{animation-delay:-0.7s}.sk-chase-dot.svelte-xwbd0w:nth-child(6):before{animation-delay:-0.6s}@keyframes svelte-xwbd0w-sk-chase{100%{transform:rotate(360deg)}}@keyframes svelte-xwbd0w-sk-chase-dot{80%,100%{transform:rotate(360deg)}}@keyframes svelte-xwbd0w-sk-chase-dot-before{50%{transform:scale(0.4)}100%,0%{transform:scale(1)}}",
  map: null
};
const SpinLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"sk-chase svelte-xwbd0w"}"><div class="${"sk-chase-dot svelte-xwbd0w"}"></div>
	<div class="${"sk-chase-dot svelte-xwbd0w"}"></div>
	<div class="${"sk-chase-dot svelte-xwbd0w"}"></div>
	<div class="${"sk-chase-dot svelte-xwbd0w"}"></div>
	<div class="${"sk-chase-dot svelte-xwbd0w"}"></div>
	<div class="${"sk-chase-dot svelte-xwbd0w"}"></div>
</div>`;
});
const YouTubePlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let video;
  let loading;
  let playVideo;
  let { videos } = $$props;
  let { movie } = $$props;
  if ($$props.videos === void 0 && $$bindings.videos && videos !== void 0)
    $$bindings.videos(videos);
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  video = videos[0];
  loading = false;
  playVideo = false;
  return `<div class="${"relative mt-5 md:mb-0 w-[95vw] sm:w-[75vw] mx-auto sm:h-[65vh] min-h-[400px] max-w-full"}">${playVideo ? `<button class="${"bg-gray-900/60 rounded-full p-2 absolute left-3 top-[43%] z-50"}"><svg class="${"w-10 text-gray-100"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}" role="${"presentation"}"><path d="${"M7.47,11.152l8-5C15.779,5.958,16.167,5.949,16.485,6.125C16.803,6.302,17,6.636,17,7v10 c0,0.364-0.197,0.698-0.515,0.875C16.333,17.958,16.167,18,16,18c-0.184,0-0.368-0.051-0.53-0.152l-8-5C7.178,12.665,7,12.345,7,12 S7.178,11.335,7.47,11.152z"}"></path></svg></button>
		<div class="${"absolute w-full h-full top-0 left-0 z-30 rounded-lg bg-gray-400/50"}"><div class="${"relative w-full h-full"}"><iframe${add_attribute("title", video.name, 0)}${add_attribute("src", `https://www.youtube.com/embed/${video.key}?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`, 0)} frameborder="${"0"}" allowfullscreen class="${"absolute top-0 left-0 w-full h-full rounded-lg"}"></iframe></div></div>

		<button class="${"rotate-180 bg-gray-900/60 rounded-full p-2 absolute right-3 top-[43%] z-50"}">
			<svg class="${"w-10 text-gray-100"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}" role="${"presentation"}"><path d="${"M7.47,11.152l8-5C15.779,5.958,16.167,5.949,16.485,6.125C16.803,6.302,17,6.636,17,7v10 c0,0.364-0.197,0.698-0.515,0.875C16.333,17.958,16.167,18,16,18c-0.184,0-0.368-0.051-0.53-0.152l-8-5C7.178,12.665,7,12.345,7,12 S7.178,11.335,7.47,11.152z"}"></path></svg></button>` : `<img${add_attribute("alt", movie.title, 0)}${add_attribute("src", `https://image.tmdb.org/t/p/original${movie.poster_path}`, 0)} class="${"absolute z-40 object-cover w-full h-full shadow-lg rounded-lg"}">
		<button aria-label="${"Play Video"}" class="${[
    "absolute inset-0 top-0 flex items-center justify-center w-screen max-w-full h-full transition-colors duration-300 bg-gray-800 bg-opacity-50 group hover:bg-opacity-25 rounded-lg z-40",
    loading ? "loading" : ""
  ].join(" ").trim()}"><div class="${"flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110"}">${loading ? `${validate_component(SpinLoader, "SpinLoader").$$render($$result, {}, {}, {})}` : `<svg class="${"w-10 text-gray-900"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}"><path d="${"M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"}"></path></svg>`}</div></button>`}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let movie;
  let similar;
  let videos;
  let loading;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  movie = data.movie;
  similar = data.similar;
  videos = data.videos;
  loading = false;
  data.loading;
  return `${$$result.head += `<!-- HEAD_svelte-1gv6zks_START -->${$$result.title = `<title>${escape(movie.title)}</title>`, ""}<meta name="${"description"}" content="${"Details page"}"><!-- HEAD_svelte-1gv6zks_END -->`, ""}

<section class="${"dark:bg-gray-900"}"><div class="${"flex justify-center"}"><a href="${"/"}" class="${"flex items-center justify-center w-10 h-10 transition duration-300 transform dark:bg-gray-200 rounded-full shadow-2xl absolute top-5 left-5 z-50 hover:bg-gray-100"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-5 h-5 text-gray-800 dark:text-gray-800"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"4"}" d="${"M10 19l-7-7m0 0l7-7m-7 7h18"}"></path></svg></a></div>
	<div class="${"max-w-full"}"><div class="${"mb-4"}">${validate_component(YouTubePlayer, "YouTubePlayer").$$render($$result, { movie, videos }, {}, {})}</div>
		<div class="${"flex flex-col items-center justify-center "}">${movie.title !== void 0 && !loading ? `<h2 class="${"mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl sm:leading-none"}">${escape(movie.title)}</h2>
				<p class="${"text-center text-base text-gray-700 dark:text-gray-400 max-w-md break-words"}">${escape(movie.overview)}</p>
				<div class="${"flex gap-16 items-center py-4"}">${each(movie.genres, (genre) => {
    return `<span class="${"text-gray-200 dark:text-white px-4 py-2 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 dark:from-gray-800 dark:to-gray-900"}">${escape(genre.name)}</span>`;
  })}</div>
				<div class="${"mt-6 flex items-center md:justify-center"}"><a href="${"/"}" class="${"inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-400 hover:bg-orange-500 focus:shadow-outline focus:outline-none"}"><svg class="${"w-10 text-gray-100"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}"><path d="${"M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"}"></path></svg>
						Watch now
					</a></div>` : `${validate_component(DetailShimmer, "DetailShimmer").$$render($$result, {}, {}, {})}`}</div></div>
	<h3 class="${"ml-4 text-lg text-orange-500 font-bold mt-20 mb-5"}">Similar movies</h3>
	${validate_component(MovieCarousel, "MovieCarousel").$$render($$result, { similar }, {}, {})}
</section>`;
});
export {
  Page as default
};

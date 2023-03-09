import { c as create_ssr_component, d as createEventDispatcher, f as add_attribute, v as validate_component, h as each } from "../../chunks/index.js";
import { M as Movie } from "../../chunks/Movie.js";
const sun = "/_app/immutable/assets/sun-b6fce056.svg";
const moon = "/_app/immutable/assets/moon-013bc9f4.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#header.svelte-1tn8wxz.svelte-1tn8wxz{background-image:radial-gradient(\n			50% 50% at 50% 50%,\n			rgba(0, 0, 0, 0.342) 0%,\n			rgba(0, 0, 0, 0.555) 100%\n		)}button.svelte-1tn8wxz a.svelte-1tn8wxz{font-family:'Rubik Distressed', cursive !important}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dark = false } = $$props;
  createEventDispatcher();
  let searchQuery = "";
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  $$result.css.add(css$2);
  return `<header aria-label="${"Page Header"}" class="${"pb-4 sticky top-0 z-50"}"><div id="${"header"}" class="${"w-full p-4 sm:px-6 lg:px-8 shadow-md svelte-1tn8wxz"}"><div class="${"flex items-center justify-between gap-4"}"><button class="${"svelte-1tn8wxz"}"><a href="${"/"}" class="${"text-2xl svelte-1tn8wxz"}">Re-View</a></button>
			<section class="${"flex gap-2 items-center"}"><div class="${"relative"}"><label class="${"sr-only"}" for="${"search"}">Search </label>

					<input class="${"h-10 w-full rounded-full border-none bg-white dark:bg-gray-800 pl-4 pr-10 text-sm shadow-sm sm:w-56 dark:text-white transition focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700"}" id="${"search"}" type="${"search"}" placeholder="${"Search movies..."}"${add_attribute("value", searchQuery, 0)}>

					<button class="${"absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-50 dark:bg-gray-800 p-2 text-gray-600 dark:text-gray-300 transition hover:text-gray-700"}"><span class="${"sr-only"}">Search</span>
						<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></button></div>
				<button class="${"flex items-center justify-center focus:outline-none hover:border-transparent text-gray-700 dark:text-white relative ml-3 bg-white dark:bg-gray-800 rounded-full p-3 transition hover:bg-gray-100"}">${dark ? `<img class="${"w-4 h-4 dark:invert"}"${add_attribute("src", sun, 0)} alt="${""}">` : `<img class="${"w-4 h-4 dark:invert"}"${add_attribute("src", moon, 0)} alt="${""}">`}</button></section></div></div>
</header>`;
});
const Loader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".spinner.svelte-1cee6o5.svelte-1cee6o5{margin:100px auto 0;width:70px;text-align:center}.spinner.svelte-1cee6o5>div.svelte-1cee6o5{width:18px;height:18px;background-color:#333;border-radius:100%;display:inline-block;animation:svelte-1cee6o5-sk-bouncedelay 1.4s infinite ease-in-out both}.spinner.svelte-1cee6o5 .bounce1.svelte-1cee6o5{animation-delay:-0.32s}.spinner.svelte-1cee6o5 .bounce2.svelte-1cee6o5{animation-delay:-0.16s}@keyframes svelte-1cee6o5-sk-bouncedelay{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}",
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"spinner dark:invert svelte-1cee6o5"}"><div class="${"bounce1 svelte-1cee6o5"}"></div>
	<div class="${"bounce2 svelte-1cee6o5"}"></div>
	<div class="${"bounce3 svelte-1cee6o5"}"></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-sr8i7o{font-family:'Fira Sans Condensed', sans-serif;transition:all 1s ease}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dark;
  let movies;
  let loading;
  $$result.css.add(css);
  dark = true;
  movies = [{}];
  loading = false;
  return `${$$result.head += `<!-- HEAD_svelte-p7c38k_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Re-View"}" class="${"svelte-sr8i7o"}"><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" class="${"svelte-sr8i7o"}"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" class="${"svelte-sr8i7o"}"><link href="${"https://fonts.googleapis.com/css2?family=Nerko+One&family=Rubik+Distressed&display=swap"}" rel="${"stylesheet"}" class="${"svelte-sr8i7o"}"><link href="${"https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap"}" rel="${"stylesheet"}" class="${"svelte-sr8i7o"}"><!-- HEAD_svelte-p7c38k_END -->`, ""}

<main class="${"dark:bg-gray-900 min-h-screen svelte-sr8i7o"}">${validate_component(Header, "Header").$$render($$result, { dark }, {}, {})}
	
	${loading ? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}` : `${movies.length === 0 ? `<h1 class="${"text-4xl text-center text-gray-500 svelte-sr8i7o"}">No movies found</h1>` : `<section class="${"flex flex-wrap gap-4 items-center justify-around svelte-sr8i7o"}">${each(movies, (movie) => {
    return `${validate_component(Movie, "Movie").$$render($$result, { movie }, {}, {})}`;
  })}</section>`}`}
</main>`;
});
export {
  Page as default
};

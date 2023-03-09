import { c as create_ssr_component, e as escape, f as add_attribute } from "./index.js";
const Movie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie = {} } = $$props;
  let { refresh = false } = $$props;
  let { carousel = false } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  if ($$props.refresh === void 0 && $$bindings.refresh && refresh !== void 0)
    $$bindings.refresh(refresh);
  if ($$props.carousel === void 0 && $$bindings.carousel && carousel !== void 0)
    $$bindings.carousel(carousel);
  return `<a href="${"/detail/" + escape(movie.id, true)}" class="${["relative block overflow-hidden group w-60", carousel ? "carousel" : ""].join(" ").trim()}"><img${add_attribute("alt", movie.title, 0)}${add_attribute("src", `https://image.tmdb.org/t/p/w500${movie == null ? void 0 : movie.poster_path}`, 0)} class="${"object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"}">

	<div class="${"relative mt-2"}"><h3 class="${"text-sm font-medium text-gray-900 dark:text-white"}">${escape(movie.title)}</h3>

		<p class="${"mt-1.5 text-sm text-gray-700 dark:text-gray-400"}">${escape(movie.vote_average)} / 10</p></div></a>`;
});
export {
  Movie as M
};

import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ad6py0_START -->${$$result.title = `<title>Details</title>`, ""}<meta name="${"description"}" content="${"Details page"}"><!-- HEAD_svelte-1ad6py0_END -->`, ""}

<div>Details page</div>`;
});
export {
  Page as default
};

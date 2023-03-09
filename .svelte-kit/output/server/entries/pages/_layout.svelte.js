import { c as create_ssr_component } from "../../chunks/index.js";
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"app"}"><main>${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};

import { e as error } from "../../../../chunks/index2.js";
const load = ({ params }) => {
  if (params.slug) {
    return {
      id: params.slug
    };
  }
  throw error(404, "Not found");
};
export {
  load
};

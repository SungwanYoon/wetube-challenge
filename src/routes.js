const HOME = "/";
const DETAIL = "/:id";
const EDIT = "/edit";
const DELETE = "/delete";
const SEARCH = "/search";
const FILTER = "/filter";

const routes = {
  home: HOME,
  detail: id => {
    if (id) {
      return `/${id}`;
    } else {
      return DETAIL;
    }
  },
  edit: EDIT,
  delete: DELETE,
  search: SEARCH,
  filter: FILTER
};

export default routes;

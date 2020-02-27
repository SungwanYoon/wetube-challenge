const HOME = "/";
const DETAIL = "/:id";
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
  filter: FILTER
};

export default routes;

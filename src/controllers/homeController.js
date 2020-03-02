import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "../dbAxios";

export const home = (req, res) => {
  res.render("home", { pageTitle: "home", movies: getMovies() });
};
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Get login" });
export const postLogin = (req, res) => {
  const {
    body: { name }
  } = req;
  if (false) {
    res.status(400); // Bad Request
  } else {
    res.redirect(routes.home);
  }
  //res.render("login", { pageTitle: "Post login", name });
};

export const photos = (req, res) =>
  res.render("photos", { pageTitle: "photos" });
export const profile = (req, res) =>
  res.render("profile", { pageTitle: "profile" });

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "search", searchingBy });
};

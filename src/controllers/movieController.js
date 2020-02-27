import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "../db";
import routes from "../routes";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("home", { pageTitle: "home", movies });
};
export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  res.render("detail", { pageTitle: movie.title, movie });
};
export const filterMovie = (req, res) => {
  const {
    query: { rating }
  } = req;
  const {
    query: { year }
  } = req;
  if (rating) {
    const movies = getMovieByMinimumRating(rating);
    res.render("home", {
      pageTitle: "home",
      filtered: true,
      type: "rating",
      searchingBy: rating,
      movies
    });
  } else if (year) {
    const movies = getMovieByMinimumYear(year);
    res.render("home", {
      pageTitle: "home",
      filtered: true,
      type: "year",
      searchingBy: year,
      movies
    });
  } else {
    res.render("404", {
      pageTitle: "404"
    });
  }
};

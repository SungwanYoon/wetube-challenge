import Movie from "../models/movie";

export const home = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.render("home", { pageTitle: "Movies!", movies: movies });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Movies!", movies: [] });
  }
};

export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    if (id !== "favicon.ico") {
      const movie = await Movie.findById(id);
      if (!movie) {
        return res.render("404", { pageTitle: "Movie not found" });
      } else {
        return res.render(`detail`, { pageTitle: movie.title, movie });
      }
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
export const add = async (req, res) => {
  if (req.method === "GET") {
    return res.render("add", { pageTitle: "Add Movie" });
  } else if (req.method === "POST") {
    const {
      body: { title, year, rating, synopsis, genres }
    } = req;
    const movie = await Movie.create({
      title,
      year,
      rating,
      synopsis,
      genres: genres.split(",")
    });
    return res.redirect(`/${movie.id}`);
  }
};

export const edit = async (req, res) => {
  const {
    params: { id }
  } = req;

  if (req.method === "GET") {
    try {
      const movie = await Movie.findById(id);
      return res.render("edit", { pageTitle: movie.title, movie });
    } catch (error) {
      console.log(error);
      return res.redirect("/");
    }
  } else if (req.method === "POST") {
    const {
      body: { title, year, rating, synopsis, genres }
    } = req;
    try {
      await Movie.findOneAndUpdate(
        { _id: id },
        {
          title,
          year,
          rating,
          synopsis,
          genres: genres.split(",")
        }
      );
      return res.redirect(`/${id}`);
    } catch (error) {
      console.log(error);
      res.redirect("/");
    }
  }
};

export const movieDelete = async (req, res) => {
  const {
    params: { id }
  } = req;
  if (req.method === "GET") {
    try {
      await Movie.findOneAndRemove({ _id: id });
    } catch (error) {
      console.log(error);
    } finally {
      return res.redirect("/");
    }
  }
};

export const search = async (req, res) => {
  const {
    query: { year, rating }
  } = req;
  if (year) {
    const movies = await Movie.find({ year: { $gte: year } });
    console.log(movies);
    if (!movies.length) {
      return res.render("404", { pageTitle: "Movie not found" });
    } else {
      res.render("home", { pageTitle: "Movies!", movies: movies });
    }
  } else if (rating) {
    const movies = await Movie.find({ rating: { $gte: rating } });
    console.log(movies);
    if (!movies.length) {
      return res.render("404", { pageTitle: "Movie not found" });
    } else {
      res.render("home", { pageTitle: "Movies!", movies: movies });
    }
  } else {
    const movies = await Movie.find({});
    res.render("home", { pageTitle: "Movies!", movies: movies });
  }
};

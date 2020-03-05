import movie from "../models/movie";

export const home = (req, res) =>
  res.render("home", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const movie = await movie
      .findById(id)
      .populate("creator")
      .populate("comments");
    if (!movie || id === "favicon.ico") {
      return res.render("404", { pageTitle: "Movie not found" });
    } else {
      return res.render(`detail`, { pageTitle: movie.title, movie });
    }
  } catch (error) {
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
      body: { title, synopsis, genres }
    } = req;

    const newMovie = await movie.create({
      title,
      synopsis,
      genres: genres.split(",")
    });
    return res.redirect(`/${newVideo.id}`);
  }
};

export const edit = (req, res) => {
  if (req.method === "GET") {
    return res.render("edit", { pageTitle: "edit Movie" });
  } else if (req.method === "POST") {
    const {
      body: { title, synopsis, genres }
    } = req;
    addMovie({ title, synopsis, genres: genres.split(",") });
    return res.redirect("/");
  }
};

export const movieDelete = (req, res) => {
  if (req.method === "GET") {
    return res.render("delete", { pageTitle: "edit Movie" });
  } else if (req.method === "POST") {
    // delete Movie
  }
};

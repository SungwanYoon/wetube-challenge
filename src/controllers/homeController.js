export const home = (req, res) => res.render("home", { pageTitle: "home" });
export const login = (req, res) => res.render("login", { pageTitle: "login" });
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

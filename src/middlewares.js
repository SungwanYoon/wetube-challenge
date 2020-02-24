import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "CalvinTube";
  res.locals.routes = routes;
  next();
};

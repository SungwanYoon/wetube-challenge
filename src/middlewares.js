import routes from "./routes";
import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "MovieTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

const multerFile = multer({ dest: "uploads/files/" });
export const uploadFile = multerFile.single("multerFile");

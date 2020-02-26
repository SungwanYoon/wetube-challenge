import express from "express";
import routes from "../routes";
import {
  home,
  login,
  photos,
  profile,
  search
} from "../controllers/homeController";

const homeRouter = express.Router();

homeRouter.get(routes.home, home);
homeRouter.get(routes.login, login);
homeRouter.get(routes.photos, photos);
homeRouter.get(routes.profile, profile);

homeRouter.get(routes.search, search);

export default homeRouter;

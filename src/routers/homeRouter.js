import express from "express";
import routes from "../routes";
import {
  home,
  getLogin,
  photos,
  profile,
  search,
  postLogin
} from "../controllers/homeController";

const homeRouter = express.Router();

homeRouter.get(routes.login, getLogin);
homeRouter.post(routes.login, postLogin);

homeRouter.get(routes.photos, photos);
homeRouter.get(routes.profile(), profile);
homeRouter.get(routes.search, search);
homeRouter.get(routes.home, home);

export default homeRouter;

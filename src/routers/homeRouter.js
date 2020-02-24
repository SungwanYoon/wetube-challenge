import express from "express";
import routes from "../routes";
import { home, login, photos, profile } from "../controllers/homeController";

const homeRouter = express.Router();

homeRouter.get(routes.home, home);
homeRouter.get(routes.login, login);
homeRouter.get(routes.photos, photos);
homeRouter.get(routes.profile, profile);

export default homeRouter;

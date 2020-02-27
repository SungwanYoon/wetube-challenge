import express from "express";
import routes from "../routes";
import { home, movieDetail, filterMovie } from "../controllers/movieController";

const movieRouter = express.Router();

movieRouter.get(routes.home, home);
movieRouter.get(routes.filter, filterMovie);
movieRouter.get(routes.detail(), movieDetail);

export default movieRouter;

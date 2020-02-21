import express from "express";
import routes from "../routes";
import { documentation } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get(routes.documentation, documentation);

export default apiRouter;

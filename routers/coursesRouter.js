import express from "express";
import routes from "../routes";
import { courses, newone, mine } from "../controllers/coursesController";

const coursesRouter = express.Router();

coursesRouter.get(routes.home, courses);
coursesRouter.get(routes.newone, newone);
coursesRouter.get(routes.mine, mine);

export default coursesRouter;

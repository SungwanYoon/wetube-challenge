import express from "express";
import routes from "../routes";
import {
  home,
  join,
  login,
  confirmAccount
} from "../controllers/homeController";

const homeRouter = express.Router();

homeRouter.get(routes.home, home);
homeRouter.get(routes.join, join);
homeRouter.get(routes.login, login);
homeRouter.get(routes.confirmAccount, confirmAccount);

export default homeRouter;

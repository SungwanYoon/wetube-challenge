import express from "express";
import path from "path";

import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import "./db";
import movieRouter from "./routers/movieRouter";

import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();

app.use(helmet());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use(localsMiddleware);

app.use(routes.home, movieRouter);

export default app;

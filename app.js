import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import homeRouter from "./routers/homeRouter";
import coursesRouter from "./routers/coursesRouter";
import apiRouter from "./routers/apiRouter";
import apiV1Router from "./routers/apiV1Router";
import apiV2Router from "./routers/apiV2Router";

import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("combined"));

app.use(routes.home, homeRouter);
app.use(routes.courses, coursesRouter);
app.use(routes.api, apiRouter);
app.use(routes.apiV1, apiV1Router);
app.use(routes.apiV2, apiV2Router);

export default app;

import express from "express";
import { file, fileAdd } from "../controllers/fileController";

import { uploadFile } from "../middlewares";

const fileRouter = express.Router();

fileRouter
  .route("/")
  .get(file)
  .post(uploadFile, fileAdd);

export default fileRouter;

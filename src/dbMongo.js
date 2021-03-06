import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "/.env") });

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;
const handleOpen = () => console.log("Connected To DB ✅");
const handleError = error => console.log(`Error on DB Connection : ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Home.");
const handleAboutUs = (req, res) => res.send("About Us.");
const handleContact = (req, res) => res.send("Contact.");
const handleProtected = (req, res) => res.send("Protected.");

const betweenHome = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const notAllow = (req, res, next) => res.redirect("/");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("combined"));

app.use(betweenHome);
app.get("/", handleHome);
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);
app.get("/protected", notAllow, handleProtected);

app.listen(PORT, handleListening);

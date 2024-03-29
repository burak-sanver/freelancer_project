import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js"
import photoRoute from "./routes/photoRoute.js"

dotenv.config();

//connection to DB
conn();

const app = express();
const port = process.env.PORT;

//ejs template engine
app.set("view engine", "ejs");

//static files middleware
app.use(express.static("public"));
app.use(express.json());

//routes
app.use("/", pageRoute);
app.use("/portfolio", photoRoute);
app.use("/contact", pageRoute);

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/portfolio", (req, res) => {
//   res.render("portfolio");
// });

// app.get("/about", (req, res) => {
//   res.render("about");
// });

// app.get("/contact", (req, res) => {
//   res.render("contact");
// });

app.listen(port, () => {
  console.log(`Application running on port: ${port}`);
});

const express = require("express");
const methodOverride = require("method-override");
const hbs = require("express-handlebars");

const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.engine(
  ".hbs",
  hbs.engine({
    extname: ".hbs",
    // helpers: handlebarsHelpers,
  })
);
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  return res.send("<h1>Hello world</h1>");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});

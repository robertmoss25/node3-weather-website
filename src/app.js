const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

// Define paths for Express config
const publicDir = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Robert Moss",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Robert Moss",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "A webpage for weather",
    title: "Help",
    name: "Robert Moss",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastdata) => {
        if (!error) {
          return res.send({
            forecast: forecastdata,
            location: location,
            address: req.query.address,
          });
        } else {
          return res.send({ error });
        }
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  console.log(req.query);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("Error404", {
    title: "404",
    name: "Robert Moss",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("Error404", {
    title: "404",
    name: "Robert Moss",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is runnng on port 3000");
});

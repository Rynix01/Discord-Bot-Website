const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const config = require("./config");
app.set("view engine", "ejs");
app.use(express.json());
app.set("views", "./views");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: config.bot.name,
    briefing: config.bot.briefing,
    about: config.bot.about,
    features: config.bot.features,
    links: config.links,
  });
});

app.get("/commands", (req, res) => {
  res.render("commands", {
    title: config.bot.name,
    about: config.bot.about,
    commands: config.commands,
    links: config.links,
  });
});

app.get("/terms", (req, res) => {
  res.render("terms-of-service", {
    title: config.bot.name,
    about: config.bot.about,
    links: config.links,
  });
});

app.get("/privacy", (req, res) => {
  res.render("privacy-policy", {
    title: config.bot.name,
    about: config.bot.about,
    links: config.links,
  });
});
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
